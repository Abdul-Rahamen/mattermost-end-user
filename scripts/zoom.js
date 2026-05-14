import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';



const initPhotoSwipe = () => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.sl-markdown-content',
    children: 'img',
    pswpModule: () => import('photoswipe'),
    
    // إعدادات الرؤية والذكاء
    bgOpacity: 1, // خلفية سوداء بالكامل 100%
    wheelToZoom: true, // التكبير بالسكرول
    padding: { top: 20, bottom: 20, left: 20, right: 20 },
  });

  // هذه الخطوة مهمة جداً: Starlight يضيف أبعاداً للصور قد تعيق PhotoSwipe
  // لذا سنقوم بتعريف أبعاد الصورة للمكتبة عند النقر
  lightbox.addFilter('domItemData', (itemData, element) => {
    if (element instanceof HTMLImageElement) {
      itemData.src = element.src;
      itemData.w = element.naturalWidth || element.width;
      itemData.h = element.naturalHeight || element.height;
      itemData.msrc = element.src;
    }
    return itemData;
  });

  lightbox.init();
};

document.addEventListener('astro:page-load', initPhotoSwipe);
document.addEventListener('astro:after-swap', initPhotoSwipe);
initPhotoSwipe();
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