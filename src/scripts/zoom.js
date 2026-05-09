import mediumZoom from 'medium-zoom';

function initZoom() {
  // استهداف الصور والتأكد من أنها ليست صغيرة جداً (كالأيقونات)
  const images = document.querySelectorAll('.sl-markdown-content img:not(.icon)');
  
  mediumZoom(images, {
    margin: 40,           // مسافة من حواف الشاشة
    background: '#000000e6', // خلفية سوداء داكنة جداً لإبراز الصورةC
    scrollOffset: 0,      // إغلاق الزوم عند السكرول (اختياري)
  });
}

document.addEventListener('astro:page-load', initZoom);
initZoom();


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