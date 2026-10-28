# Hướng dẫn cấu hình Supabase cho FORME

Tài liệu này hướng dẫn cấu hình đăng nhập, lưu dữ liệu tập luyện và triển khai
AI Coach trên Supabase. Các tên lệnh, tên biến và đường dẫn trong bảng điều khiển
được giữ nguyên để bạn có thể tìm đúng và chạy đúng.

## 1. Tạo và cấu hình dự án Supabase

1. Tạo một dự án trên [Supabase](https://supabase.com/).
2. Trong dự án, mở **SQL Editor** (Trình soạn thảo SQL), chạy nội dung trong
   [`supabase/setup.sql`](./supabase/setup.sql).
3. Mở **Project Settings → API Keys** (Cài đặt dự án → Khóa API). Sao chép
   Project URL (địa chỉ dự án) và khóa **publishable/anon** (khóa công khai)
   vào `url` và `anonKey` trong
   [`js/supabase-config.js`](./js/supabase-config.js).
   **Không** đưa khóa `service_role` hoặc bất kỳ khóa bí mật nào vào mã chạy
   trên trình duyệt.
4. Mở **Authentication → URL Configuration** (Xác thực → Cấu hình URL), thêm
   địa chỉ trang web vào danh sách URL chuyển hướng được phép. Khi chạy trên
   máy tính để phát triển, hãy mở dự án bằng `http://localhost` — ví dụ dùng
   tiện ích Live Server trong VS Code. Mở trực tiếp tệp `index.html` bằng địa
   chỉ `file://` không được Supabase Auth hỗ trợ.
5. Mở **Authentication → Providers → Email** (Xác thực → Nhà cung cấp → Email):
   - Đảm bảo đã bật **Enable Email provider**.
   - **TẮT mục "Confirm email"** (Xác nhận email) rồi bấm **Save**.
   *Lý do:* FORME sử dụng **Tên đăng nhập và Mật khẩu** (không cần email). Khi tắt mục này, người dùng tạo tài khoản mới có thể đăng nhập ngay tức thì mà không cần bước xác nhận qua hộp thư.

Supabase lưu thông tin tài khoản và cài đặt tập luyện của FORME. Trình duyệt
giữ một bản sao cục bộ theo từng tài khoản; khi người dùng đăng nhập, Supabase
là nguồn dữ liệu chính, bao gồm khi sử dụng trên thiết bị khác.

## 2. Cách hoạt động và an toàn của AI Coach

Trước khi bắt đầu, AI Coach xin phép gửi nội dung trò chuyện đến nhà cung cấp
AI bên ngoài. Nếu người dùng từ chối, câu trả lời về sức khỏe sẽ không được gửi.
Sau khi được đồng ý, Coach hỏi từng câu về triệu chứng và tình trạng hiện tại,
rồi hỏi tiếp dựa trên câu trả lời thay vì đưa ra một bảng câu hỏi cố định.

Coach phải kiểm tra an toàn trước khi hỏi mục tiêu hoặc tạo giáo án. Nếu chưa
làm rõ cơn đau, sưng, chấn thương hoặc tình trạng sức khỏe cần được đánh giá,
Coach sẽ dừng việc lập giáo án và hướng dẫn người dùng tìm trợ giúp y tế khi
có triệu chứng khẩn cấp. Việc sàng lọc không phải là chẩn đoán và không đảm bảo
việc tập luyện an toàn.

Chỉ khi qua bước sàng lọc sức khỏe, Coach mới hỏi về mục tiêu, kinh nghiệm,
thời gian tập, địa điểm, dụng cụ và giới hạn vận động. Giáo án có thể gồm khởi
động, bài tập, số hiệp/lần hoặc thời lượng, thời gian nghỉ, mức gắng sức, cách
tăng tiến và dấu hiệu cần dừng. Nếu có triệu chứng mới hoặc tình trạng xấu đi,
cần đánh giá lại hoặc tìm tư vấn chuyên môn.

Câu trả lời sức khỏe và nội dung chat chỉ được giữ trong bộ nhớ của trang web,
không được thêm vào hồ sơ tài khoản hoặc cơ sở dữ liệu của FORME. Khi người
dùng đồng ý, nội dung chat được gửi đến OpenAI để tạo phản hồi.

## 3. Triển khai AI Coach trên Windows

Thực hiện các bước dưới đây trên máy có thư mục dự án FORME. Không gửi mật
khẩu, access token Supabase hoặc khóa OpenAI cho người khác.

### Bước 1: Mở PowerShell tại thư mục dự án

Mở PowerShell, sau đó chạy:

```powershell
Set-Location 'C:\Users\DELL\Desktop\FORME'
```

Nếu dự án nằm ở vị trí khác, thay đường dẫn trên bằng đường dẫn thư mục FORME
trên máy của bạn.

### Bước 2: Đăng nhập Supabase CLI

Supabase CLI là công cụ dòng lệnh dùng để triển khai Function. Nếu máy chưa
cài CLI, hãy làm theo
[hướng dẫn cài Supabase CLI chính thức](https://supabase.com/docs/guides/cli).

Nếu đã cài CLI trong thư mục tài khoản theo hướng dẫn trước, chạy:

```powershell
& "$env:LOCALAPPDATA\Programs\SupabaseCLI\supabase.exe" login
```

Khi CLI yêu cầu access token:

1. Mở Supabase Dashboard, vào trang tài khoản → **Access Tokens** (Mã truy cập).
2. Tạo access token mới. Chỉ nhập token vào lời nhắc của CLI trong PowerShell.
3. Không dán token vào mã nguồn, tệp cấu hình, ảnh chụp màn hình hoặc cuộc trò
   chuyện. Nếu lỡ chia sẻ token, hãy thu hồi token đó trong Dashboard và tạo
   token mới.

CLI cần báo đăng nhập thành công trước khi tiếp tục. Access token này dùng để
quản lý dự án; **không phải** khóa OpenAI.

Nếu `supabase.exe` đã được cài ở nơi khác hoặc lệnh `supabase` dùng được trực
tiếp, có thể thay các lệnh ở những bước sau bằng `supabase`.

### Bước 3: Liên kết đúng dự án Supabase

Địa chỉ dự án đang được cấu hình trong FORME là
`https://outsescwvweodosgktvs.supabase.co`; Project Ref tương ứng là
`outsescwvweodosgktvs`. Nếu bạn đã đổi dự án, hãy lấy Project Ref từ
**Project Settings → General** và kiểm tra URL trong
[`js/supabase-config.js`](./js/supabase-config.js) trước khi triển khai.

Liên kết thư mục dự án với Project Ref đúng bằng lệnh:

```powershell
& "$env:LOCALAPPDATA\Programs\SupabaseCLI\supabase.exe" link --project-ref outsescwvweodosgktvs
```

Nếu CLI yêu cầu mật khẩu cơ sở dữ liệu, nhập mật khẩu của dự án Supabase vào
lời nhắc trong PowerShell. Không gửi mật khẩu đó cho người khác.

### Bước 4: Thêm khóa OpenAI vào Supabase

AI Coach cần khóa API OpenAI để tạo câu trả lời. Trong Supabase Dashboard, mở
dự án đúng → **Edge Functions → Secrets** (Hàm biên → Bí mật), rồi thêm:

- Tên bí mật: `AI_API_KEY`
- Giá trị: khóa API OpenAI của bạn
- Tên bí mật tùy chọn: `AI_MODEL`
- Giá trị mô hình tùy chọn: `gpt-4o-mini`

Nếu không đặt `AI_MODEL`, Function dùng mô hình mặc định được cấu hình trong mã.
Không đưa khóa OpenAI vào `js/`, HTML, Git hoặc tin nhắn; chỉ lưu khóa trong
Supabase Secrets. Tài khoản OpenAI cần có quyền API và ngân sách phù hợp.

### Bước 5: Triển khai Edge Function

Trong PowerShell đang ở thư mục FORME, chạy:

```powershell
& "$env:LOCALAPPDATA\Programs\SupabaseCLI\supabase.exe" functions deploy forme-coach --no-verify-jwt
```

Chờ đến khi CLI báo triển khai thành công. Mã Function được lưu tại
[`supabase/functions/forme-coach/index.ts`](./supabase/functions/forme-coach/index.ts).
Tham số `--no-verify-jwt` cho phép Function tự xử lý yêu cầu kiểm tra trước
(preflight) và tự xác minh access token Supabase trước khi xử lý chat.

### Bước 6: Kiểm tra

1. Chạy trang FORME qua `http://localhost` bằng Live Server trong VS Code; không
   mở `index.html` trực tiếp bằng `file://`.
2. Bắt đầu một cuộc trò chuyện mới trong AI Coach và thử gửi tin nhắn.
3. Nếu vẫn hiện lỗi, xem phần xử lý lỗi bên dưới.

## 4. Xử lý lỗi thường gặp

- **“AI Coach chưa được triển khai trên Supabase”** hoặc lỗi 404: Function chưa
  được triển khai, hoặc URL/Project Ref đã cấu hình không cùng một dự án. Kiểm
  tra lại Project Ref ở Bước 3, sau đó chạy lại lệnh deploy ở Bước 5.
- **“AI Coach chưa có cấu hình OpenAI”** hoặc lỗi 503: kiểm tra đã tạo secret
  `AI_API_KEY` trong đúng dự án chưa. Sau khi thay đổi secret, thử gửi lại.
- Lỗi 401 hoặc 403: phiên đăng nhập có thể hết hạn; đăng xuất rồi đăng nhập
  lại. Cũng cần kiểm tra URL và khóa công khai Supabase trong tệp cấu hình.
- Lỗi 502 hoặc AI không trả lời: kiểm tra trạng thái API, quyền truy cập và
  giới hạn sử dụng của tài khoản OpenAI; xem nhật ký Function trong
  **Edge Functions → forme-coach → Logs**.

Function giới hạn kích thước yêu cầu nhưng hiện chưa có hạn mức số lần gọi
được lưu bền vững theo từng người dùng. Hãy theo dõi chi phí và đặt giới hạn
sử dụng cho tài khoản OpenAI.

## 5. Lưu ý về sức khỏe và quyền riêng tư

Phản hồi AI chỉ là thông tin chăm sóc sức khỏe phổ thông, không thay thế tư vấn
y tế hoặc chẩn đoán. Trước khi mở tính năng cho người dùng, hãy xem xét chính
sách quyền riêng tư và lưu trữ dữ liệu của nhà cung cấp AI. Nội dung sức khỏe
chỉ được gửi đến nhà cung cấp sau khi người dùng đồng ý rõ ràng.
