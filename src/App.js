import './App.css';
import { Helmet } from "react-helmet"
function App() {
  return (
    <div className="light-mode">
      <header id="navbar">
        <a className="logo">
          <svg style={{float: 'left'}} width="60" height="60" viewBox="0 0 3500 3500" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M2311.53 1215.66L1089.07 1659L1208.21 1238.4L2410.64 798L2311.53 1215.66Z"
                  fill="url(#paint0_linear_218_12)"></path>
            <path d="M1047.99 2214.86L1507.94 2040.4L2026.04 2384.04L1544.95 2543.6L1047.99 2214.86Z"
                  fill="#D9D9D9"></path>
            <path d="M1169.55 1807.77L2026.01 2384.03L1544.92 2542.63L1047.96 2214.85L1169.55 1807.77Z"
                  fill="url(#paint1_linear_218_12)"></path>
            <path d="M1666.51 2140.83L1047.96 2214.85L1169.55 1807.77L1666.51 2140.83Z" fill="#D6A91E"></path>
            <path d="M2105.31 1834.2L2232.2 1405.97L1169.55 1807.77L1047.96 2214.85L2105.31 1834.2Z"
                  fill="url(#paint2_linear_218_12)"></path>
            <path d="M2163.47 1633.31L2232.2 1405.97L1169.55 1807.77L1143.12 1897.65L2163.47 1633.31Z"
                  fill="url(#paint3_linear_218_12)"></path>
            <defs>
              <linearGradient id="paint0_linear_218_12" x1="1095.57" y1="1543.44" x2="2422.56" y2="914.309"
                              gradientUnits="userSpaceOnUse">
                <stop stop-color="#2DB656"></stop>
                <stop offset="1" stop-color="#74DC65"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_218_12" x1="1248.85" y1="2040.39" x2="1692.95" y2="2431.61"
                              gradientUnits="userSpaceOnUse">
                <stop offset="0.0652429" stop-color="#E3B525"></stop>
                <stop offset="0.789675" stop-color="#FFC81B"></stop>
              </linearGradient>
              <linearGradient id="paint2_linear_218_12" x1="1640.08" y1="1564.58" x2="1835.69" y2="2035.1"
                              gradientUnits="userSpaceOnUse">
                <stop offset="0.167047" stop-color="#1D8D2B"></stop>
                <stop offset="0.43085" stop-color="#2DA150"></stop>
                <stop offset="0.807736" stop-color="#2BB857"></stop>
              </linearGradient>
              <linearGradient id="paint3_linear_218_12" x1="1640.08" y1="1564.58" x2="1835.69" y2="2035.1"
                              gradientUnits="userSpaceOnUse">
                <stop offset="0.0581062" stop-color="#218F2F"></stop>
              </linearGradient>
            </defs>
          </svg>
          <h2 style={{float: 'left', color:'white',fontSize:'1.4em', fontWeight: 'bold'}} id="title-nav">F-Code<span
              className="typed-cursor">|</span></h2>
        </a>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#FAQ">FAQ</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
        <div id="switcher-mode" className="LampSwitchMode" data-hide-print="true" tabIndex="0">
          <div className="LampLine">
            <div className="LampLineDetail"></div>
          </div>
          <div className="LampTide">
            <div className="LampTideDetail"></div>
          </div>
        </div>
      </header>
      <section>
        <div className="nav-section" id="nav-section">
          <div className="left-title">
            <label>Uncategorized</label>
            <h2>Note code with notion</h2>
          </div>
          <div className="right-title">
            <label>2023-05-08</label>
            <h2>Hà Thị Huyền Trang</h2>
          </div>
        </div>
        <div className="header-section">
          <time>Thứ năm, ngày 8 tháng 6 năm 2023</time>
          <h1>NOTE CODE WITH NOTION</h1>
          <div className="short-description">
            <span>
             Notion là một công cụ được thiết kế để giúp bạn tổ chức tài liệu, cơ sở dữ liệu, nội dung nghe nhìn, ghi chú, cuộc họp và lịch trình, tất cả từ một giao diện. Bên cạnh đó, Notion cũng là công cụ hỗ trợ ghi chép và học code hiệu quả. Để có thể nhớ lâu hơn về những cú pháp hoặc mẹo trong mỗi bài học, chúng ta cần ghi chép, trình bày và làm bài tập ví dụ nhiều thì mới có thể nhớ và hiểu rõ được. Và Notion là Website có thể giúp chúng ta điều đó.
            </span>
          </div>
        </div>
        <p className="content-section">


          <h2 className="head-a">A. Từng bước đến Notion</h2>

          <p>1. Truy cập v&agrave;o Notion:</p>

          <p>Đối với những người chưa tiếp x&uacute;c với Notion trước đ&acirc;y, bạn cần đăng k&yacute; t&agrave;i
            khoản qua account c&oacute; sẵn của Google, Apple hoặc tạo t&agrave;i khoản Notion mới qua đường link
            sau: <a href="https://www.notion.so/" target="_self">https://www.notion.so/</a></p>

          <p>Bạn c&oacute; thể đăng nhập v&agrave; sử dụng Notion sau khi tạo t&agrave;i khoản th&agrave;nh c&ocirc;ng.
            C&oacute; ba c&aacute;ch v&agrave;o Notion:</p>

          <ul>
            <li>
              <p>M&aacute;y t&iacute;nh: truy cập <a href="https://www.notion.so/desktop"
                                                     target="_self">https://www.notion.so/desktop</a> để c&agrave;i đặt
                Notion tr&ecirc;n m&aacute;y t&iacute;nh của bạn.</p>
            </li>
            <li>
              <p>Điện thoại: T&igrave;m kiếm v&agrave; c&agrave;i đặt ứng dụng Notion tr&ecirc;n Google Play hoặc App
                Store.</p>
            </li>
            <li>
              <p>Trực tuyến: sau khi t&agrave;i khoản bạn được tạo, Notion sẽ tự động mở ra trang của bạn khi v&agrave;o
                lại <a href="https://www.notion.so/" target="_self">https://www.notion.so/</a> .</p>
            </li>
          </ul>

          <p>2. Cấu tr&uacute;c của Notion:</p>

          <p>Tương tự như sắp xếp c&aacute;c folder trong m&aacute;y t&iacute;nh, Notion cũng đi theo hướng cho người
            d&ugrave;ng xếp page nhỏ nằm trong page lớn. Người d&ugrave;ng tạo ra page để viết nội dung
            v&agrave; c&oacute; thể tạo c&aacute;c page nhỏ kh&aacute;c trong page đ&oacute;.</p>

          <p><img
              src="https://fcodehcm.files.wordpress.com/2022/12/z3980742790582_d6136eb3c23d82eb83f4af8621cea3e2.jpg?w=207"
              alt="undefined" style={{height: 'auto', width: 'auto'}} /></p>

          <p>3. C&aacute;ch tạo page:</p>

          <p>Sau khi đăng nhập v&agrave;o Notion, bạn sẽ nh&igrave;n thấy giao diện Workspace. Đ&acirc;y ch&iacute;nh
            l&agrave; kh&ocirc;ng gian l&agrave;m việc v&agrave; s&aacute;ng tạo của bạn tr&ecirc;n Notion. Ngo&agrave;i
            ra, bạn c&ograve;n c&oacute; thể đặt t&ecirc;n cho Workspace của ri&ecirc;ng m&igrave;nh.</p>

          <p>Để bắt đầu l&agrave;m việc với Notion, bạn cần tạo page theo một trong 2 c&aacute;ch sau:</p>

          <p>C&aacute;ch 1: V&agrave;o Workspace chọn &ocirc; &ldquo;Add a page&rdquo; ở cuối danh s&aacute;ch page.
            Page n&agrave;y sẽ l&agrave; page ngo&agrave;i c&ugrave;ng lớn nhất.</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/z3980787289534_268f7693bef8781303f20ab2e7b485e3.jpg"/>
          </p>

          <p>&nbsp;</p>

          <p>Để tạo page con th&igrave; v&agrave;o page cha, nhấn dấu &ldquo;+&ldquo;. Muốn page con nằm trong cha
            n&agrave;o th&igrave; v&agrave;o cha đ&oacute; tạo.</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/z3980799482869_42a3d62877b40fc481169a5556c99b6a-1.jpg"/>
          </p>

          <p>&nbsp;</p>

          <p>C&aacute;ch 2: V&agrave;o một page c&oacute; sẵn, g&otilde;&nbsp;&ldquo;/page&rdquo;&nbsp;rồi nhấn
            enter:</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/anh-chup-man-hinh-2022-12-22-212244.png"/></p>

          <p>&nbsp;</p>

          <p>4. Thao t&aacute;c trong page:</p>

          <p>Trang ghi ch&eacute;p mới sẽ hiện ra với giao diện như b&ecirc;n dưới. Ngo&agrave;i đặt t&ecirc;n chủ đề,
            ch&uacute;ng ta c&oacute; thể th&ecirc;m ảnh b&igrave;a, icon tượng trưng cho trang ghi
            ch&eacute;p.&nbsp;</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/anh-chup-man-hinh-2022-12-22-215749.png"/></p>

          <p>Để sử dụng c&ocirc;ng cụ trong trang, ch&uacute;ng ta chọn dấu &ldquo;+&rdquo; đứng trước mỗi h&agrave;ng
            hoặc g&otilde; &rdquo; / &ldquo;, c&aacute;c c&ocirc;ng cụ gợi &yacute; sẽ hiện ra.</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/anh-chup-man-hinh-2022-12-22-220339.png?w=293"/></p>

          <p>Ngo&agrave;i ra, dấu &ldquo;+&rdquo; đứng trước mỗi h&agrave;ng c&ograve;n c&oacute; t&aacute;c dụng
            th&ecirc;m h&agrave;ng cho nội dung kế tiếp.</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/z3980937032192_9f69e541d10890ccced813640ae44f0f.jpg?w=303"/>
          </p>

          <p>B&ecirc;n cạnh đ&oacute;, bạn c&ograve;n c&oacute; thể di chuyển văn bản đ&oacute; đến bất k&igrave; vị
            tr&iacute; n&agrave;o m&agrave; bạn muốn bằng c&aacute;ch: Bước 1: Đặt chuột v&agrave;o biểu tượng menu của
            văn bản cần di chuyển.</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/z3981007150730_7f3d386f493447cd6fd4e4137b3653da.jpg?w=425"/>
          </p>

          <p>Bước 2: K&eacute;o thả văn bản đến vị tr&iacute; cần đến, đường kẻ m&agrave;u xanh thể hiện cho vị
            tr&iacute; bạn chọn.</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/anh-chup-man-hinh-2022-12-22-223510.png?w=361"/></p>

          <h2 className="head-b">B. T&iacute;nh năng ghi ch&eacute;p tr&ecirc;n Notion</h2>

          <p>1. Thao t&aacute;c cơ bản: ch&egrave;n ảnh, video, văn bản, bảng, danh s&aacute;ch</p>

          <p>Ngo&agrave;i việc ghi ch&eacute;p văn bản theo c&aacute;ch đơn giản nhất, Notion c&ograve;n cho ph&eacute;p
            bạn chỉnh sửa văn bản, thay đổi loại nội dung bằng c&aacute;ch chọn dấu + đứng trước mỗi h&agrave;ng.</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/anh-chup-man-hinh-2022-12-22-222608.png?w=1024"/>
          </p>

          <p>2. Ch&egrave;n code với nhiều ng&ocirc;n ngữ kh&aacute;c nhau</p>

          <p>Thay v&igrave; ghi ch&eacute;p bằng tay, ghi ch&eacute;p bằng những tr&igrave;nh duyệt với văn bản
            b&igrave;nh thường, ch&uacute;ng ta sẽ rất kh&oacute; để ph&acirc;n biệt đ&acirc;u l&agrave; nội dung trong
            code, đ&acirc;u l&agrave; ch&uacute; th&iacute;ch, đ&acirc;u l&agrave; văn bản b&igrave;nh thường. Nhờ
            t&iacute;nh năng n&agrave;y của Notion, ch&uacute;ng ta c&oacute; thể dễ d&agrave;ng ch&egrave;n code, dễ
            d&agrave;ng ph&acirc;n biệt. Sau đ&acirc;y l&agrave; c&aacute;ch thực hiện t&iacute;nh năng ch&egrave;n
            code.</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/z3981039700012_49a7af8d611a1b55c137de4494e714dc.jpg"/>
          </p>

          <p>Bước 1: G&otilde; &ldquo;/code&rdquo; để hiện ra lựa chọn hoặc chọn dấu &ldquo;+&rdquo; đứng trước mỗi
            h&agrave;ng v&agrave; chọn Code.</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/anh-chup-man-hinh-2022-12-22-224706.png?w=245"/></p>

          <p>Bước 2: Chọn ng&ocirc;n ngữ lập tr&igrave;nh bạn muốn.</p>

          <p><img alt="undefined"
                  src="https://lh6.googleusercontent.com/wylONq7GR8BjDOt1_GzTrbnpq9TYTP6nWLt6Huob5Q4H9O2xddAgRXlzlTODhRPsEIfwIe2oO-AQeON2W1paUH8204xl7MiwNesRyhD85Dg9w-GegjSxtDDYLhN11J0sL9HINnsm9sT8Y65SxFQ4TfGoDrIXp9Fgwp-IIxKbpbsi9M8WnVLuNp8bey-L"/>
          </p>

          <p>Bước 3: Nhập code m&agrave; bạn muốn ghi lại.</p>

          <p><img alt="undefined"
                  src="https://lh6.googleusercontent.com/WGTUMULk09wx4fL5U4r3SCVxGg4uQC9PN3N1OE7aNK4qpQ2bZN_utOe272M1LrfqUpCiEyB51GMvxUfEYtfDRCmQQ5ManriBYuH4aeErMdohM60MnqU1d3-3buXBO0_b7Rcu0oQkTggOtma8qMivuvXctWlyjB-XQKNL0BIDrdqsQIUsECggdmIbQasz"/>
          </p>

          <p>&nbsp;</p>

          <p>3. Li&ecirc;n kết với nhiều trang kh&aacute;c nhau hỗ trợ cho qu&aacute; tr&igrave;nh ghi ch&eacute;p:</p>

          <p>a. Li&ecirc;n kết với một nội dung trong Notion:</p>

          <p>Trường hợp 1: Li&ecirc;n kết trong văn bản</p>

          <p>&nbsp;</p>

          <p><img alt="undefined"
                  src="https://lh3.googleusercontent.com/LaEjttduowaepg6xMNbsL6b2G988IqTnoFYjWF2oQv7tcfUXOQfSaEQxCrDXHXMYAUXybsSmkfsDVgLttK4VOPHHe6Up1b3l14W4hu9gT2OMSC_k1xWJ0XVNfM7jCfLBcYO1sbPG-MXjMCzshEtDk04x8SYg2IyilHDKR2V8NsZWPNuVqK48qMCkqHHI"/>
          </p>

          <p>&nbsp;</p>

          <p><img alt="undefined"
                  src="https://lh3.googleusercontent.com/mqI7NQPBFOPEK62KLLywGobyKGKlUBM23bCPU0olreNfjpSaP4TgfxJTe-tE6MDGW3-fS2lJMvITq-kjXOY35agPV4jFqv6w9j4w2mVpSGGgSyTYN3miapMV7ERoc10I8kafvbTa0WUxqOJqLD_od2H7mZ4c2BYrypegAnVSS_XqzstEC6OTnGUp0IDU"/>
          </p>

          <p>Trường hợp 2: Li&ecirc;n kết trong bảng</p>

          <p>Ta c&oacute; thể li&ecirc;n kết một bảng, một cột với những dữ liệu đ&atilde; c&oacute;.</p>

          <p><img alt="undefined"
                  src="https://lh6.googleusercontent.com/Mqonlc5J8crr9ECxJ91NU8n0OHptd_-2OgNC2vBENYGDeRQFEYHa78Y9nFTOLfP3y6cnWKmj3dh3NEr1oy6ZaC5c7RAvjv0-rLez84gcR9P5j9XWrhOWzxFdLm6jigX9YW_PGt43WJXJ_KMzfB8YgTcoLPoRAHVgjOK4D11CieNn5CrJpX6m4MeJi514"/>
          </p>

          <p>&nbsp;</p>

          <p>b. Li&ecirc;n kết với trang web hỗ trợ code: Codepen, Github,&hellip;</p>

          <p><img alt="undefined"
                  src="https://lh3.googleusercontent.com/QjRabw6vJouAvcA6rElv8fnfN6QaHjZx2otL1tq3cfErR-qGLJhgEjdc9FZbBEHqcIYnNtUggwb9qLL2N4NuprV5xy-dXSsWZsiPet86J-HKS3jGl_6O_Q2v2aSXhdPvWIS7u2xUZKZM_7rTJNxmV7hNtiR7F7NMcdn3khxJJ1vKwqllyne7gtVQnNbX"/>
          </p>

          <p>Cũng như mục 1 v&agrave; 2, ch&uacute;ng ta c&oacute; thể d&ugrave;ng&nbsp; &ldquo; / &rdquo; cộng với
            t&ecirc;n trang web để hiện ra lựa chọn hoặc chọn dấu &ldquo;+&rdquo; đứng trước mỗi h&agrave;ng.</p>

          <p><img alt="undefined"
                  src="https://lh6.googleusercontent.com/myNQ4uQdT-Ayn7_CePjQTQ1s9gND00q6EiaBw5aWN4PUdXlW-JTtnnuSTXhv_auELCewNNB6HRifDnHnY4_T7YaMPFzDnL0FFWM8iErYtTUQVXEcTbJZsL876rP9i5QKKZcW7VCFBhgYqIiJf1RTabrb2l3CjebtbeHQkKoHxU658aIzKlEfXWOABiht"/>
          </p>

          <p>&nbsp;</p>

          <p>4. Quản l&yacute; tiến độ học, ghi ch&eacute;p</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/anh-chup-man-hinh-2022-12-22-231432.png?w=1024"/>
          </p>

          <p>H&atilde;y qu&ecirc;n c&aacute;ch đ&aacute;nh dấu &ldquo;Đ&atilde; ho&agrave;n th&agrave;nh&rdquo; bằng
            việc tick v&agrave;o &ocirc; Checkbox đi, Notion đ&atilde; c&oacute; t&iacute;nh năng thể hiện tiến độ học
            v&agrave; ghi ch&eacute;p cho bạn. V&agrave; tất nhi&ecirc;n n&oacute; rất ph&ugrave; hợp với coder như
            ch&uacute;ng ta khi ch&uacute;ng được thực hiện bằng những c&acirc;u lệnh.</p>

          <p><img alt="undefined"
                  src="https://fcodehcm.files.wordpress.com/2022/12/anh-chup-man-hinh-2022-12-22-231914.png"/></p>

          <p>&nbsp;</p>

          <h2 className="head-c">C. Tổng kết</h2>

          <p>Qua Notion, bạn c&oacute; thể ghi ch&eacute;p v&agrave; học code một c&aacute;ch chi tiết,
            r&otilde; r&agrave;ng hơn. Ngo&agrave;i ra, việc tạo n&ecirc;n một trang ghi ch&eacute;p logic, hiệu quả
            c&ograve;n gi&uacute;p bạn biết c&aacute;ch chia bố cục, h&igrave;nh th&agrave;nh tư duy quản l&yacute;.</p>

          <p>&nbsp;</p>

          <h2 className="head-d">D. Nguồn tham khảo</h2>

          <ul>
            <li>
              <p><a href="https://learnlingo.co/huong-dan-su-dung-notion-de-ghi-chep-danh-cho-nguoi-moi-bat-dau/"
                    target="_blank">https://learnlingo.co/huong-dan-su-dung-notion-de-ghi-chep-danh-cho-nguoi-moi-bat-dau/</a>
              </p>
            </li>
            <li>
              <p><a href="https://lptech.asia/kien-thuc/chi-tiet-cach-su-dung-notion-de-ghi-chep-cho-nguoi-moi-bat-dau"
                    target="_blank">https://lptech.asia/kien-thuc/chi-tiet-cach-su-dung-notion-de-ghi-chep-cho-nguoi-moi-bat-dau</a>
              </p>
            </li>
            <li>
              <p><a href="https://www.notion.vip/notion-formulas-create-a-progress-bar/"
                    target="_blank">https://www.notion.vip/notion-formulas-create-a-progress-bar/</a></p>
            </li>
          </ul>


        </p>
      </section>
      <footer>
        <div className="content-footer">
          <img width="80px" src="https://f-code.tech/static/media/f-code.cebaeec25ba71c27c75475c3be744374.svg"
               alt="F-Code" className="sc-hBxehG daZfIl"/>
            <p>F-Code Information Portal</p>
        </div>
        <div className="copyright-footer">
          <p>© 2022 <strong>F-Code</strong>. All rights reserved </p>
        </div>
      </footer>
      <Helmet>
        <script
            src="/main.js"
            crossorigin="anonymous"
            async
        ></script>
      </Helmet>
    </div>
  );
}

export default App;
