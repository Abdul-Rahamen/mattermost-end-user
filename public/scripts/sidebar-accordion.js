(function() {
    const init = () => {
        const sidebar = document.querySelector('.sidebar-content');
        if (!sidebar) return;

        /**
         * شرح المشكلة المتطورة:
         * الاستراتيجية السابقة كانت تعمل في الصفحة الحالية فقط، لكن Starlight لديه ميزة "ذاكرة الجلسة" (Session Storage).
         * هو يحفظ حالة كل قائمة (مفتوحة/مغلقة) ليعيد فتحها عند الانتقال لصفحة جديدة.
         * عندما كان السكربت يغلق القائمة برمجياً، لم يكن "يخبر" نظام الذاكرة في Starlight بهذا التغيير،
         * فكان النظام يعيد فتح القوائم القديمة عند كل تحميل صفحة جديدة.
         */

        // وظيفة مساعدة لإغلاق القائمة وتحديث "ذاكرة" المتصفح
        const closeAccordion = (details) => {
            if (!details.open) return;
            details.open = false;
            // إطلاق حدث 'toggle' يدوياً لضمان أن Starlight والأنظمة الأخرى تلاحظ التغيير وتحدث ذاكرتها
            details.dispatchEvent(new Event('toggle'));
        };

        // 1. تنظيف السايدبار عند تحميل الصفحة لضمان فتح المسار النشط فقط
        const cleanupOnLoad = () => {
            const activeLink = sidebar.querySelector('a[aria-current="page"]');
            const activeDetailsPath = [];
            
            // تحديد كافة الأكورديونات التي تحتوي على الرابط النشط
            let current = activeLink;
            while (current && current !== sidebar) {
                if (current.tagName === 'DETAILS') {
                    activeDetailsPath.push(current);
                }
                current = current.parentElement;
            }

            // إغلاق أي أكورديون مفتوح ليس في مسار الصفحة النشطة
            const allOpen = sidebar.querySelectorAll('details[open]');
            allOpen.forEach(details => {
                if (!activeDetailsPath.includes(details)) {
                    closeAccordion(details);
                }
            });
        };

        // تشغيل التنظيف فوراً عند التحميل
        cleanupOnLoad();

        // 2. إدارة النقرات الجديدة
        sidebar.addEventListener('click', (e) => {
            const summary = e.target.closest('summary');
            if (!summary) return;

            const details = summary.parentElement;
            if (details.tagName !== 'DETAILS') return;

            if (!details.open) {
                // فتح قائمة جديدة -> إغلاق الجيران
                const parentList = details.closest('ul');
                if (parentList) {
                    const siblings = parentList.querySelectorAll(':scope > li > details');
                    siblings.forEach((sib) => {
                        if (sib !== details && sib.open) {
                            closeAccordion(sib);
                            // إغلاق الأبناء أيضاً لضمان حالة نظيفة
                            sib.querySelectorAll('details').forEach(child => closeAccordion(child));
                        }
                    });
                }
            } else {
                // إغلاق قائمة -> إغلاق الأبناء تتابعياً
                details.querySelectorAll('details').forEach(child => closeAccordion(child));
            }
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    document.addEventListener('astro:after-swap', init);
})();
