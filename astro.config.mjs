// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "تعـــــــاون ",
      components:{
        // @ts-ignore
   
        Footer: "/src/components/ZoomImage.astro",
           },
      logo: {
        src: "./src/assets/logo-light.png",
        alt: "Taawon",
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
          },
        },{
          tag: 'script',
          attrs: {
            src: '/scripts/zoom.js',
            // type: 'module',
              defer: true,

            
          },
        },
        {
          tag: 'script',
          attrs: {
            src: '/scripts/sidebar-accordion.js',
            defer: true,
          },
        },
      ],
      social: [

      ],
      customCss: [
        'photoswipe/style.css',
        "./src/styles/global.css",
        "./src/styles/sidebar-scroll.css",
        "./src/styles/headings.css",
        './src/styles/custom.css',
        './src/styles/layout-1532.css',
        './src/styles/image-zoom.css',
        './src/styles/asides.css',
        './src/styles/light-dark-img.css',
        './src/fonts/EffraVF_Trial_Wght.ttf',
        './src/styles/searchbar-responsive.css',
        './src/styles/tables-rtl.css',
        "./src/styles/code-style.css",       
         "./src/styles/tabs-filter.css",

      ],
      
      sidebar: [
        {
          label: "دليل المستخدم النهائي",
          items: [
            {
              label: "دليل المستخدم النهائي",
              slug: "end-user-guide/end-user-guide",
            },
          ],
        },
        {
          label: "الوصول إلى مساحة عملك",
          items: [
            {
              label: "الوصول إلى مساحة عملك",
              slug: "access-your-workspace/access-your-workspace",
            },
            {
              label: "تثبيت تطبيق سطح المكتب",
              slug: "access-your-workspace/install-the-desktop-app",
            },
            {
              label: "تثبيت تطبيق Android المحمول",
              slug: "access-your-workspace/install-the-android-mobile-app",
            },
            {
              label: "توفر العميل",
              slug: "access-your-workspace/client-availability",
            },
            {
              label: "تسجيل الخروج",
              slug: "access-your-workspace/log-out-of-workspace",
            },
          ],
          collapsed: true,
        },
        {
          label: "التعاون في المراسلة",
          items: [
            {
              label: "التعاون في المراسلة",
              slug: "messaging-collaboration/messaging-collaboration",
            },
            {
              label: "التنظيم باستخدام الفرق",
              items: [
                {
                  label: "التنظيم باستخدام الفرق",
                  slug: "messaging-collaboration/organize-using-teams/organize-using-teams",
                },
                {
                  label: "إعدادات الفريق",
                  slug: "messaging-collaboration/organize-using-teams/team-settings",
                },
                {
                  label: "اختصارات لوحة مفاتيح الفريق",
                  slug: "messaging-collaboration/organize-using-teams/team-keyboard-shortcuts",
                },
              ],
              collapsed: true,
            },
            {
              label: "التنظيم باستخدام مجموعات المستخدمين المخصصة",
              slug: "messaging-collaboration/organize-using-custom-user-groups",
            },
            {
              label: "دعوة الأشخاص",
              slug: "messaging-collaboration/invite-people",
            },
            {
              label: "تعرف على الأدوار والصلاحيات",
              slug: "messaging-collaboration/learn-about-taawon-roles",
            },
            {
              label: "عرض معلومات النظام",
              slug: "messaging-collaboration/view-system-information",
            },
            {
              label: "التعاون داخل القنوات",
              items: [
                {
                  label: "التعاون داخل القنوات",
                  slug: "messaging-collaboration/collaborate-within-channels/collaborate-within-channels",
                },
                {
                  label: "أنواع القنوات",
                  slug: "messaging-collaboration/collaborate-within-channels/channel-types",
                },
                {
                  label: "اصطلاحات تسمية القنوات",
                  slug: "messaging-collaboration/collaborate-within-channels/channel-naming-conventions",
                },
                {
                  label: "توصيل تركيز القناة ونطاقها",
                  slug: "messaging-collaboration/collaborate-within-channels/communicate-a-channels-focus-and-scope",
                },
                {
                  label: "إنشاء قنوات",
                  slug: "messaging-collaboration/collaborate-within-channels/create-channels",
                },
                {
                  label: "إعادة تسمية القنوات",
                  slug: "messaging-collaboration/collaborate-within-channels/rename-channels",
                },
                {
                  label: "عرض لافتات القناة",
                  slug: "messaging-collaboration/collaborate-within-channels/display-channel-banners",
                },
                {
                  label: "الترجمة التلقائية للرسائل",
                  slug: "messaging-collaboration/collaborate-within-channels/autotranslate-messages",
                },
                {
                  label: "تحويل القنوات العامة إلى قنوات خاصة",
                  slug: "messaging-collaboration/collaborate-within-channels/convert-public-channels-to-private-channels",
                },
                {
                  label: "تحويل الرسائل الجماعية إلى قنوات خاصة",
                  slug: "messaging-collaboration/collaborate-within-channels/convert-group-messages-to-private-channels",
                },
                {
                  label: "الانضمام إلى القنوات ومغادرتها",
                  slug: "messaging-collaboration/collaborate-within-channels/join-and-leave-channels",
                },
                {
                  label: "إجراء مكالمات في منصة ",
                  slug: "messaging-collaboration/collaborate-within-channels/make-calls",
                },
                {
                  label: "إدارة أعضاء القناة",
                  slug: "messaging-collaboration/collaborate-within-channels/manage-channel-members",
                },
                {
                  label: "تصفح القنوات",
                  slug: "messaging-collaboration/collaborate-within-channels/browse-channels",
                },
                {
                  label: "التنقل بين القنوات",
                  slug: "messaging-collaboration/collaborate-within-channels/navigate-between-channels",
                },
                {
                  label: "تمييز القنوات كمفضلة",
                  slug: "messaging-collaboration/collaborate-within-channels/mark-channels-as-favorites",
                },
                {
                  label: "إدارة الإشارات المرجعية للقنوات",
                  slug: "messaging-collaboration/collaborate-within-channels/manage-channel-bookmarks",
                },
                {
                  label: "تمييز القنوات كغير مقروءة",
                  slug: "messaging-collaboration/collaborate-within-channels/mark-channels-as-unread",
                },
                {
                  label: "أرشفة القنوات وإلغاء أرشفتها",
                  slug: "messaging-collaboration/collaborate-within-channels/archive-and-unarchive-channels",
                },
              ],
              collapsed: true,
            },
            {
              label: "التواصل باستخدام الرسائل والمواضيع",
              items: [
                {
                  label: "التواصل باستخدام الرسائل والمواضيع",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/communicate-with-messages-and-threads",
                },
                {
                  label: "إرسال الرسائل",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/send-messages",
                },
                {
                  label: "الرد على الرسائل",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/reply-to-messages",
                },
                {
                  label: "التفاعل باستخدام الرموز التعبيرية وملفات GIF",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/react-with-emojis-and-gifs",
                },
                {
                  label: "تنظيم المحادثات",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/organize-conversations",
                },
                {
                  label: "تمييز الرسائل كغير مقروءة",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/mark-messages-as-unread",
                },
                {
                  label: "إعادة توجيه الرسائل",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/forward-messages",
                },
                {
                  label: "مشاركة الروابط للقنوات والرسائل",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/share-links-to-channels-and-messages",
                },
                {
                  label: "حفظ الرسائل وتثبيتها",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/save-and-pin-messages",
                },
                {
                  label: "تعيين تذكيرات الرسائل",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/set-message-reminders",
                },
                {
                  label: "البحث عن الرسائل",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/search-for-messages",
                },
                {
                  label: "جدولة الرسائل",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/schedule-messages",
                },
                {
                  label: "تمييز الرسائل",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/flag-messages",
                },
                {
                  label: "تنسيق الرسائل",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/format-messages",
                },
                {
                  label: "تعيين أولوية الرسالة",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/set-message-priority",
                  badge: {
                    text: "Stop",
                    variant: "danger",
                  },
                },
                {
                  label: "الإشارة للأشخاص",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/mention-people",
                },
                {
                  label: "مشاركة الملفات في الرسائل",
                  slug: "messaging-collaboration/communicate-with-messages-and-threads/share-files-in-messages",
                },
              ],
              collapsed: true,
            },
            {
              label: "اختصارات لوحة المفاتيح",
              items: [
                {
                  label: "اختصارات لوحة المفاتيح",
                  slug: "messaging-collaboration/keyboard-shortcuts/keyboard-shortcuts",
                },
                {
                  label: "إمكانية الوصول للوحة المفاتيح",
                  slug: "messaging-collaboration/keyboard-shortcuts/keyboard-accessibility",
                },
              ],
              collapsed: true,
            },
            {
              label: "توسيع منصة تعاون باستخدام عمليات الدمج",
              slug: "messaging-collaboration/extend-workspace-with-integrations",
            },
          ],
          collapsed: true,
        },
        {
          label: "أتمتة سير العمل",
          items: [
            {
              label: "أتمتة سير العمل",
              slug: "workflow-automation/workflow-automation",
            },
            {
              label: "تعرف على قوالب العمل التعاونية",
              slug: "workflow-automation/learn-about-collaborative-playbooks",
            },
            {
              label: "إدارة  قوالب العمل التعاونية",
              slug: "workflow-automation/work-with-collaborative-playbooks",
            },
            {
              label: "إدارة عمليات التشغيل",
              slug: "workflow-automation/work-with-runs",
            },
            {
              label: "إدارة المهام",
              slug: "workflow-automation/work-with-tasks",
            },
            {
              label: "إدارة الإشعارات والتحديثات",
              slug: "workflow-automation/work-with-notifications-and-updates",
            },
            {
              label: "إدارة المقاييس والأهداف",
              slug: "workflow-automation/work-with-metrics-and-goals",
            },
            {
              label: "المشاركة والتعاون",
              slug: "workflow-automation/share-and-collaborate",
            },
            {
              label: "التفاعل مع  قوالب العمل التعاونية",
              slug: "workflow-automation/interact-with-collaborative-playbooks",
            },
          ],
          collapsed: true,
        },
        {
          label: "مشاركة الصوت والشاشة",
          items: [
            {
              label: "مشاركة الصوت والشاشة",
              slug: "audio-and-screensharing/audio-and-screensharing",
            },
          ],
          collapsed: true,
        },
        {
          label: "إدارة المشاريع والمهام",
          items: [
            {
              label: "إدارة المشاريع والمهام",
              slug: "project-and-task-management/project-and-task-management",
            },
            {
              label: "التنقل في اللوحات",
              slug: "project-and-task-management/navigate-boards",
            },
            {
              label: "إدارة اللوحات",
              slug: "project-and-task-management/work-with-boards",
            },
            {
              label: "إدارة البطاقات",
              slug: "project-and-task-management/work-with-cards",
            },
            {
              label: "إدارة العروض",
              slug: "project-and-task-management/work-with-views",
            },
            {
              label: "إدارة المجموعات والفرز والتصفية",
              slug: "project-and-task-management/work-with-groups-filter-and-sort",
            },
            {
              label: "إدارة الحسابات",
              slug: "project-and-task-management/work-with-calculations",
            },
            {
              label: "المشاركة والتعاون",
              slug: "project-and-task-management/share-and-collaborate",
            },
            {
              label: "الاستيراد والتصدير والترحيل",
              slug: "project-and-task-management/import-export-and-migrate",
            },
            {
              label: "إعدادات اللوحات",
              slug: "project-and-task-management/boards-settings",
            },
          ],
          collapsed: true,
        },
        {
          label: "وكلاء الذكاء الاصطناعي",
          items: [
            {
              label: "وكلاء الذكاء الاصطناعي",
              slug: "ai-agents/ai-agent"
            },
            {
              label: "نصائح استخدام الوكلاء وأفضل الممارسات",
              slug: "ai-agents/agents-usage-tips-and-best-practices",
            },
            {
              label: "إدارة سياق الوكلاء",
              slug: "ai-agents/agents-context-management",
            },
          ],
          collapsed: true,
        },
        {
          label: "تخصيص تفضيلاتك",
          items: [
            {
              label: "تخصيص تفضيلاتك",
              slug: "customize-your-preferences/customize-your-preferences",
            },
            {
              label: "إدارة إشعاراتك",
              items: [
                {
                  label: "إدارة إشعاراتك",
                  slug: "customize-your-preferences/manage-your-notifications/manage-your-notifications",
                },
                {
                  label: "استكشاف أخطاء الإشعارات وإصلاحها",
                  slug: "customize-your-preferences/manage-your-notifications/troubleshoot-notifications",
                },
                {
                  label: "إدارة إشعارات الويب الخاصة بك",
                  slug: "customize-your-preferences/manage-your-notifications/manage-your-web-notifications",
                },
                {
                  label: "إدارة إشعارات سطح المكتب الخاصة بك",
                  slug: "customize-your-preferences/manage-your-notifications/manage-your-desktop-notifications",
                },
                {
                  label: "إدارة إشعارات هاتفك المحمول",
                  slug: "customize-your-preferences/manage-your-notifications/manage-your-mobile-notifications",
                },
                {
                  label: "إدارة إشعارات الرد على المواضيع",
                  slug: "customize-your-preferences/manage-your-notifications/manage-your-thread-reply-notifications",
                },
                {
                  label: "إدارة إشعارات الإشارة @ والكلمات الرئيسية",
                  slug: "customize-your-preferences/manage-your-notifications/manage-your-mention-keyword-notifications",
                },
                {
                  label: "إدارة إشعاراتك الخاصة بالقنوات",
                  slug: "customize-your-preferences/manage-your-notifications/manage-your-channelspecific-notifications",
                },
              ],
              collapsed: true,
            },
            {
              label: "تخصيص سمة منصة تعاون الخاصة بك",
              slug: "customize-your-preferences/customize-your-theme",
            },
            {
              label: "تخصيص شريط القناة الجانبي",
              slug: "customize-your-preferences/customize-your-channel-sidebar",
            },
            {
              label: "إدارة ملفك الشخصي",
              slug: "customize-your-preferences/manage-your-profile",
            },
            {
              label: "إدارة تفضيلات الأمان الخاصة بك",
              slug: "customize-your-preferences/manage-your-security-preferences",
            },
            {
              label: "تعيين حالتك وتوافرك",
              slug: "customize-your-preferences/set-your-status-availability",
            },
            {
              label: "إدارة خيارات العرض الخاصة بك",
              slug: "customize-your-preferences/manage-your-display-options",
            },
            {
              label: "إدارة خيارات الشريط الجانبي",
              slug: "customize-your-preferences/manage-your-sidebar-options",
            },
            {
              label: "إدارة الخيارات المتقدمة",
              slug: "customize-your-preferences/manage-advanced-options",
            },
            {
              label: "إدارة تفضيلات المكونات الإضافية",
              slug: "customize-your-preferences/manage-your-plugin-preferences",
            },
            {
             label: "الاتصال بمساحات عمل متعددة",
             slug: "customize-your-preferences/connect-to-multiple-workspaces",
           },
            {
              label: "تخصيص تجربة تطبيق سطح المكتب",
              slug: "customize-your-preferences/customize-your-desktop-app-experience",
            }
          ],
          collapsed: true,
        },
      ],
      locales: {
        root: {
          label: "Arabic",
          lang: "ar",
          dir: "rtl",
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'photoswipe/dist/photoswipe.css': 'photoswipe/style.css',
      },
    },
  },
});
