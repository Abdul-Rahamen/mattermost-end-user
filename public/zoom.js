// استخدام CDN لضمان عمل المكتبة فوراً بدون تثبيت npm
import mediumZoom from 'https://cdn.skypack.dev/medium-zoom';

function initZoom() {
  // استهداف الصور التي ليست أيقونات وليست داخل أزرار
  const images = document.querySelectorAll('.sl-markdown-content img:not(.icon)');
  mediumZoom(images, {
    margin: 24,
    background: 'rgba(0, 0, 0, 0.9)',
  });
}

// تشغيل التكبير عند تحميل الصفحة أول مرة
document.addEventListener('DOMContentLoaded', initZoom);

// تشغيل التكبير عند التنقل بين صفحات Starlight (بسبب استخدام View Transitions)
document.addEventListener('astro:after-swap', initZoom);