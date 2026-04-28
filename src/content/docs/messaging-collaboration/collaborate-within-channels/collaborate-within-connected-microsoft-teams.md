---
title: "التعاون داخل Microsoft Teams (Collaborate within Microsoft Teams)"
description: "تكامل Workspace مع Microsoft Teams"
---


يتيح لك تكامل Workspace لـ Microsoft Teams كسر حواجز العزلة في بيئة مختلطة بين Workspace و Teams من خلال إعادة توجيه إشعارات الدردشة في الوقت الفعلي من Teams إلى Workspace.

![يقوم تكامل Workspace لـ Microsoft Teams بإعادة توجيه إشعارات الدردشة في الوقت الفعلي من Teams إلى Workspace.](../../../../images/microsoft-teams-chat-notifications.gif)

:::note
<a href="https://academy.Workspace.com/p/new-mattermost-for-microsoft-teams-integration" class="mm-badge mm-badge--academy" target="_blank">
<img src="../_static/images/badges/academy-callout-image.jpg" alt="Mattermost Academy" />
<div class="mm-badge__copy">
<span class="mm-badge__accent-text">Workspace Academy</span>
<span class="mm-badge__title">تعرف على كيفية التكامل مع Microsoft Teams</span>
</div>
</a>
:::

## ربط حساب Workspace الخاص بك بحساب Microsoft Teams الخاص بك (Connect your Workspace account to your Microsoft Teams account)

:::note
يجب على مسؤول النظام لديك تثبيت وتمكين [تكامل Workspace لـ Microsoft Teams](/integrations-guide/microsoft-teams-sync) والتأكد من [تمكين دعم الإشعارات](/administration-guide/configure/plugins-configuration-settings) حتى تتمكن من ربط حسابك وتلقي إشعارات الدردشة.
:::

بمجرد تثبيت التكامل وتكوينه من قبل مسؤول النظام، يمكنك ربط حساب مستخدم Workspace الخاص بك بحساب Microsoft Teams الخاص بك. تحتاج فقط إلى إكمال هذه الخطوة مرة واحدة.

1. قم بتسجيل الدخول إلى Workspace باستخدام بيانات الاعتماد الخاصة بك.
2. في أي قناة، قم بتشغيل أمر الشرطة المائلة `/msteams connect` وحدد الرابط الناتج.
3. قم بالمصادقة مع Microsoft Teams باستخدام عنوان البريد الإلكتروني المطابق لحسابك في Workspace.

سوف يؤكد Workspace عند ربط حسابك.

بمجرد ربط حساب Workspace الخاص بك بحساب Microsoft Teams الخاص بك، عندما تكون غير متصل بالإنترنت أو بعيدًا عن Microsoft Teams، ستظهر أي رسائل تتلقاها في دردشة أو دردشة جماعية في Microsoft Teams في Workspace كإشعار وتتضمن رابطًا لفتح الدردشة في Microsoft Teams لمواصلة المحادثة. لن تظهر هذه الإشعارات إذا كنت نشطًا مؤخرًا في Teams.

![مثال على إشعار رسالة دردشة.](../../../../images/microsoft-teams-chat-notifications.png)

### إدارة إعدادات الإشعارات (Manage notification settings)

قم بإدارة إعدادات إشعارات Workspace الخاصة بتكامل Microsoft Teams في أي وقت في **الإعدادات (Settings) > تفضيلات الإضافات (Plugin Preferences)**.

![إدارة إعدادات الإشعارات لتكامل Microsoft Teams في إعدادات الحساب > تفضيلات الإضافات.](../../../../images/teams_plugin_notification_settings.png)

:::note
يمكنك تشغيل [أوامر الشرطة المائلة (slash commands)](/integrations-guide/run-slash-commands) التالية لإدارة إعدادات التكامل الخاصة بك عن طريق كتابة الأوامر في مربع نص رسالة Workspace، واختيار **إرسال (Send)**:
- `/msteams connect`: ربط حساب Workspace الخاص بك بحساب Microsoft Teams.
- `/msteams disconnect`: فصل حساب Workspace الخاص بك عن حساب Microsoft Teams.
- `/msteams status`: إظهار حالة الاتصال الحالية الخاصة بك.
- `/msteams notifications on|off`: تغيير إعدادات الإشعارات الحالية الخاصة بك.
:::

## الأسئلة الشائعة (Frequently asked questions)

### كيف يحدد التكامل متى يتم إرسال إشعارات الدردشة؟ (How does the integration determine when to send chat notifications?)

يتم إرسال إشعارات الدردشة في الوقت الفعلي عندما لا تكون نشطًا في Microsoft Teams وتتلقى رسالة دردشة أو دردشة جماعية. يستخدم Workspace حالتك عبر الإنترنت في Teams لتحديد ما إذا كان يجب تسليم إشعار الدردشة. يقوم Workspace بتسليم الإشعارات إذا ظهرت كـ **غائب (Away)** أو **غير متصل (Offline)** في Microsoft Teams، لذا فإن السلوك الافتراضي لوقت تسليم الإشعارات يعتمد على العميل الذي تستخدمه عادةً للوصول إلى Microsoft Teams:

- **متصفح الويب**: يقوم Workspace بتسليم الإشعارات عندما لا يكون لديك أي نشاط في علامة تبويب متصفح Microsoft Teams لمدة 5 دقائق أو أكثر، أو عند إغلاق علامة تبويب المتصفح، أو عندما تضع علامة على نفسك كـ **غير متصل (Offline)** في Microsoft Teams.
- **تطبيق سطح المكتب**: يقوم Workspace بتسليم الإشعارات عندما لا يكون لديك أي نشاط على جهاز الكمبيوتر الخاص بك لمدة 5 دقائق أو أكثر، أو عند إغلاق تطبيق Microsoft Teams لسطح المكتب، أو عندما تضع علامة على نفسك كـ **غير متصل (Offline)** في Microsoft Teams.

من أجل تجنب الإشعارات المزدوجة، لن يقوم Workspace بتسليم إشعارات الدردشة عندما يكون توفرك مضبوطًا على **متاح (Available)**، أو **مشغول (Busy)**، أو **الرجاء عدم الإزعاج (Do not disturb)**، أو **سأعود حالاً (Be right back)** في Microsoft Teams.
