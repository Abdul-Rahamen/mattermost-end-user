---
title: "التعاون ضمن تكامل Microsoft Teams"
description: "تعرّف على كيفية الاستفادة من تكامل منصة تعاون مع Microsoft Teams للحفاظ على مزامنة الإشعارات والمحادثات."
---


يتيح تكامل منصة تعاون مع **Microsoft Teams** كسر حواجز العزلة في بيئات العمل المختلطة، وذلك من خلال إعادة توجيه إشعارات الدردشة (Chat Notifications) في الوقت الفعلي من Teams إلى منصة تعاون.

![إعادة توجيه إشعارات الدردشة في الوقت الفعلي من Teams إلى منصة تعاون](../../../../images/microsoft-teams-chat-notifications.gif)

:::note
<a href="https://academy.Workspace.com/p/new-workspace-for-microsoft-teams-integration" class="mm-badge mm-badge--academy" target="_blank">
<img src="../_static/images/badges/academy-callout-image.jpg" alt="أكاديمية منصة تعاون" />
<div class="mm-badge__copy">
<span class="mm-badge__accent-text">أكاديمية منصة تعاون</span>
<span class="mm-badge__title">تعرّف على كيفية التكامل مع Microsoft Teams</span>
</div>
</a>
:::

## ربط حساب منصة تعاون بحساب Microsoft Teams

:::note
يجب على مسؤول النظام تثبيت وتمكين [تكامل منصة تعاون مع Microsoft Teams](/integrations-guide/microsoft-teams-sync) والتأكد من [تمكين دعم الإشعارات](/administration-guide/configure/plugins-configuration-settings) لتتمكن من ربط حسابك وتلقي إشعارات الدردشة.
:::

بمجرد قيام مسؤول النظام بتثبيت وإعداد التكامل، يمكنك ربط حساب المستخدم الخاص بك في منصة تعاون بحسابك في Microsoft Teams. (تحتاج إلى إكمال هذه الخطوة مرة واحدة فقط).

1. سجّل الدخول إلى منصة تعاون باستخدام بيانات الاعتماد الخاصة بك.
2. في أي قناة، نفّذ أمر الشرطة المائلة (Slash Command) بكتابة `/msteams connect` وانقر على الرابط الناتج.
3. قم بتسجيل الدخول والمصادقة في Microsoft Teams باستخدام عنوان البريد الإلكتروني المطابق لحسابك في منصة تعاون.

ستظهر لك رسالة تأكيد في منصة تعاون بمجرد ربط الحسابين بنجاح.

بعد ربط حسابك، وفي حال كنت غير متصل بالإنترنت (Offline) أو غير متواجد (Away) على Microsoft Teams، فإن أي رسائل تتلقاها في محادثة فردية أو جماعية على Teams ستظهر كإشعار داخل منصة تعاون. سيتضمن الإشعار رابطًا لفتح المحادثة في Microsoft Teams لمواصلة النقاش. (لن تظهر هذه الإشعارات إذا كنت نشطًا مؤخرًا في Teams).

![مثال على إشعار رسالة دردشة.](../../../../images/microsoft-teams-chat-notifications.png)

### إدارة إعدادات الإشعارات

يمكنك إدارة إعدادات إشعارات تكامل Microsoft Teams في أي وقت بالانتقال إلى **الإعدادات** (Settings) > **تفضيلات الإضافات** (Plugin Preferences).

![إدارة إعدادات الإشعارات لتكامل Microsoft Teams في إعدادات الحساب > تفضيلات الإضافات.](../../../../images/teams_plugin_notification_settings.png)

:::note
يمكنك تشغيل [أوامر الشرطة المائلة (Slash commands)](/integrations-guide/run-slash-commands) التالية لإدارة إعدادات التكامل عن طريق كتابة الأمر في حقل كتابة الرسائل، ثم النقر على **إرسال** (Send):
* `/msteams connect`: لربط حساب منصة تعاون بحساب Microsoft Teams.
* `/msteams disconnect`: لفصل ارتباط حساب منصة تعاون عن حساب Microsoft Teams.
* `/msteams status`: لعرض حالة الاتصال الحالية.
* `/msteams notifications on|off`: لتشغيل أو إيقاف إعدادات الإشعارات الحالية.
:::

## الأسئلة الشائعة (FAQ)

### كيف يحدد النظام توقيت إرسال إشعارات الدردشة؟

يتم إرسال إشعارات الدردشة في الوقت الفعلي عندما تكون غير نشط في Microsoft Teams وتتلقى رسالة فردية أو جماعية. تعتمد منصة تعاون على حالة اتصالك (Online Status) في Teams لتحديد ما إذا كان ينبغي إرسال الإشعار أم لا. يتم إرسال الإشعارات إذا كانت حالتك في Microsoft Teams تظهر كـ **غائب** (Away) أو **غير متصل** (Offline). وعليه، يعتمد السلوك الافتراضي لتوقيت تسليم الإشعارات على كيفية وصولك إلى Microsoft Teams:

* **متصفح الويب:** تقوم منصة تعاون بإرسال الإشعارات إذا لم تقم بأي نشاط في علامة تبويب Microsoft Teams لمدة 5 دقائق أو أكثر، أو عند إغلاق علامة التبويب، أو عندما تضبط حالتك يدويًا على **غير متصل** (Offline).
* **تطبيق سطح المكتب:** تقوم منصة تعاون بإرسال الإشعارات إذا لم تقم بأي نشاط على جهاز الكمبيوتر لمدة 5 دقائق أو أكثر، أو عند إغلاق تطبيق Microsoft Teams، أو عندما تضبط حالتك يدويًا على **غير متصل** (Offline).

لتجنب تكرار الإشعارات (Double notifications)، لن تقوم منصة تعاون بإرسال إشعارات الدردشة إذا كانت حالة التواجد الخاصة بك في Microsoft Teams مضبوطة على: **متاح** (Available)، **مشغول** (Busy)، **الرجاء عدم الإزعاج** (Do not disturb)، أو **سأعود حالاً** (Be right back).
