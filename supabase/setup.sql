create table if not exists public.forme_user_data (
  user_id uuid primary key references auth.users (id) on delete cascade,
  profile jsonb not null default '{}'::jsonb,
  completed jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.forme_user_data enable row level security;

drop policy if exists "Users can read their own FORME data" on public.forme_user_data;
create policy "Users can read their own FORME data"
  on public.forme_user_data for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own FORME data" on public.forme_user_data;
create policy "Users can create their own FORME data"
  on public.forme_user_data for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own FORME data" on public.forme_user_data;
create policy "Users can update their own FORME data"
  on public.forme_user_data for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

grant select, insert, update on public.forme_user_data to authenticated;

-- Tùy chọn: Tự động kích hoạt các tài khoản tạo bằng tên đăng nhập (@forme.app)
-- nếu trước đó chưa tắt "Confirm email" trong Authentication settings
update auth.users
set email_confirmed_at = coalesce(email_confirmed_at, now())
where email like '%@forme.app';
