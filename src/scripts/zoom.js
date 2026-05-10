import mediumZoom from 'medium-zoom';



const setupZoom = () => {
    const images = document.querySelectorAll('.sl-markdown-content img:not(.icon)');

  // 1. إعداد المكتبة الأساسية
  const zoom = mediumZoom(images, {
    margin: 24,
    background: 'rgba(0, 0, 0, 0.8)',
    scrollOffset: 0, // لمنع إغلاق الصورة فور السكرول
  });

  // 2. إضافة ميزة التكبير عبر عجلة الماوس
  zoom.on('opened', () => {
    const zoomImage = document.querySelector('.medium-zoom-image--opened');
    
    const handleWheel = (event) => {
      event.preventDefault();
      
      // الحصول على قيمة التكبير الحالية أو البدء بـ 1
      let currentScale = parseFloat(zoomImage.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
      
      // تحديد اتجاه التكبير (لأعلى يكبر، لأسفل يصغر)
      const delta = event.deltaY > 0 ? -0.1 : 0.1;
      let newScale = currentScale + delta;

      // وضع حدود للتكبير (بين 1 و 3 أضعاف مثلاً)
      newScale = Math.min(Math.max(1, newScale), 3);

      // تطبيق التكبير الجديد مع الحفاظ على التوسيط
      zoomImage.style.transform = `scale(${newScale})`;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    // تنظيف الحدث عند إغلاق الصورة
    zoom.on('closed', () => {
      window.removeEventListener('wheel', handleWheel);
    });
  });
};

// تشغيل السكربت مع نظام Astro
document.addEventListener('astro:page-load', setupZoom);
setupZoom()

// function applyAccordionLogic() {
//   // ميزة HTML5 الجديدة: إعطاء نفس الاسم لمجموعة details يجعلها تعمل كأكورديون
//   const allDetails = document.querySelectorAll('.sidebar-content details');
//   allDetails.forEach(detail => {
//     detail.setAttribute('name', 'starlight-menu');
//   });
// }

// // تشغيل عند التحميل وعند الانتقال
// document.addEventListener('astro:page-load', applyAccordionLogic);
// applyAccordionLogic();


// دالة الفتح القسري
/**
 * سكربت "الصياد" لفتح القوائم الجانبية في Starlight
 */
const autoExpandSidebar = () => {
  // 1. وظيفة للبحث عن العنصر حتى داخل الـ Shadow DOM إذا وجد
  const findActive = () => {
    // نبحث عن الرابط النشط في كل مكان في الصفحة
    // Starlight يضع aria-current="page" دائماً على الرابط النشط
    return document.querySelector('a[aria-current="page"]');
  };

  const expandParents = (el) => {
    if (!el) return;
    
    // الصعود للأعلى وفتح كل عنصر details نصادفه
    let parent = el.closest('details');
    while (parent) {
      if (!parent.hasAttribute('open')) {
        parent.setAttribute('open', '');
        parent.open = true; // لضمان الاستجابة الفورية للمتصفح
      }
      // الاستمرار في الصعود لفتح القوائم الأكبر (Nested)
      parent = parent.parentElement?.closest('details');
    }
  };

  // 2. محرك التنفيذ: يحاول الفتح فوراً ثم يكرر المحاولة لضمان الاستقرار
  const run = () => {
    const active = findActive();
    if (active) {
      expandParents(active);
    }
  };

  // محاولات متكررة في أول ثانيتين (لأن Starlight يعيد بناء القائمة بعد التحميل)
  run();
  let timer;
  let attempts = 0;
  
  timer = setInterval(() => {
    run();
    attempts++;
    if (attempts > 10) clearInterval(timer);
  }, 300);
};

// 3. الربط بأحداث Astro لضمان العمل عند التنقل بين الصفحات
document.addEventListener('astro:page-load', autoExpandSidebar);
document.addEventListener('astro:after-swap', autoExpandSidebar);

// تشغيل فوري
autoExpandSidebar();