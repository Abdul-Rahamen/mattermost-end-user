Role: You are a Senior Technical Writer and Astro Starlight Developer specializing in professional enterprise documentation.
Task: Transform the provided Markdown/MDX content into a modern, highly polished, and professional Starlight MDX page 

path : C:\Users\AB-Hamoud\pro\mattermost-end-user\src\content\docs\messaging-collaboration\*\*.md

Core Instructions:

Component Integration: Replace standard Markdown with Starlight components:
Use <Tabs> and <TabItem> to separate "Web/Desktop" from "Mobile" instructions.
Use <Steps> for all ordered instruction lists.
Use <Aside> for notes (note), tips (tip), and warnings (danger).
Use <Badge> to indicate version or plan availability (e.g., Enterprise).
All images  in content should be in the same path in the docs.
we will copy the content of .md file and create new one with .mdx extension and put content of .md in it ,and start apply mdx on it .
apply and process full content of files not part of it.
any files with  .mdx extention was note processed as required or it is not  containing full content of the .md file you have to fix that.

we will start processing  the path we mentioned it previously 
without deleting the original docs or files with .md extensions.
take care of design and style and avoid syntax errors 
you can use any components of astro and import any thing you use from it like {Image,Tabs,TabItem,Badge,etc...}.
Image Styling (Critical):
Convert standard ![]() images for example :
import { Image } from 'astro:assets';
import myImage from "../../../../images/mobile-edit-a-channel-bookmark.gif";
  <Image src={myImage} alt="حذف الإشارة" height="500" />
  ## ⚙️ إدارة الإشارات المرجعية

Constraint: For mobile screenshots, apply a fixed height (e.g., 450px), width: auto, and a borderRadius: '15px' to mimic a real phone screen.
Ensure images are centered using display: 'block' and margin: 'auto'.
Code Cleanup: Remove all legacy HTML noise (<span dir="ltr">, <div>, ##SUBST##, broken macros).
Information Architecture: Use clear headings, bullet points, and tables for comparison.
Example of Input Style to Fix:
![Plan Icon](##SUBST##) Available on Enterprise [link] or in fortawsome icons 
<div class="tab">Mobile Step 1...</div>
Example of Expected Output Style:
<Aside type="note"><Badge text="Enterprise" /> متاح في نسخة...</Aside>
<Tabs><TabItem label="الهاتف">...</TabItem></Tabs>
Content to transform: start apply from C:\Users\AB-Hamoud\pro\mattermost-end-user\src\content\docs\*\*\*.md or *.mdx
change the extension of the name of file *.mdx instead of *.md
you can skip if the directory is empty
How the AI will apply this (Examples)
Example 1: Fixing "Plan Availability"
Old MD: <Aside type="note">[|plans-img-yellow|] Available on Entry, Professional, Enterprise</Aside>
New MDX (AI Output):
code
Mdx
<Aside type="note" title="توفر الميزة">
  متوفر في خطط: <Badge text="Entry" variant="note" /> <Badge text="Professional" variant="note" /> <Badge text="Enterprise" variant="note" />
</Aside>
Example 2: Fixing Mobile Screenshots (Phone Height)
Old MD: ![Mobile Screen](../../image.jpg)
New MDX (AI Output):
code
Mdx
<img 
  src="../../image.jpg" 
  alt="واجهة الهاتف" 
  style={{ height: '450px', width: 'auto', borderRadius: '15px', border: '1px solid #ddd', display: 'block', margin: '10px auto' }} 
/>
Example 3: Platform Separation
Old MD: A long page with "Web instructions" then "Mobile instructions" below it.
New MDX (AI Output):
code
Mdx
<Tabs>
  <TabItem label="سطح المكتب" icon="laptop">
    <Steps>
      1. افتح المتصفح...
      2. أدخل الرابط...
    </Steps>
  </TabItem>
  <TabItem label="الهاتف المحمول" icon="mobile">
    <Steps>
      1. حمل التطبيق...
      2. سجل الدخول...
    </Steps>
  </TabItem>
</Tabs>
do not remove urls links or any texts noises just take care of design and transforming do not ignore or remove any information. 
last point is to fix url links that used in content of .mdx files based on the local structure. 