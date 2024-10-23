
const logos = document.querySelectorAll(".logos");
const sidebar = document.querySelector(".sidebar");
const texts = document.querySelectorAll(".sidebar-texts");
const close1 = document.querySelector(".close");
const closeImage = document.querySelector(".close-btn");
const hoverElements = document.querySelectorAll(".hover-name");


for (let i = 0; i < logos.length; i++) {
  logos[i].addEventListener("click", function (event) {
    sidebar.classList.add("sidebar-show");

    // غیرفعال کردن هاورها
    hoverElements.forEach((el) => {
      el.style.visibility = "hidden";
      el.style.opacity = "0";
    });

    for (let j = 0; j < texts.length; ++j) {
      texts[j].classList.add("sidebar-texts-show");
    }
    close1.classList.add("close-end");
    closeImage.classList.add("close-rotate");
  });
}

close1.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-show");

  // بازنشانی تنظیمات هاورها به حالت اولیه در صورتی که منو بسته شود
  if (!sidebar.classList.contains("sidebar-show")) {
    hoverElements.forEach((el) => {
      el.style.visibility = ""; // حذف دستی تنظیم visibility
      el.style.opacity = ""; // حذف دستی تنظیم opacity
    });

    for (let j = 0; j < texts.length; ++j) {
      texts[j].classList.remove("sidebar-texts-show");
    }
    close1.classList.remove("close-end");
    closeImage.classList.remove("close-rotate");
  } else {
    hoverElements.forEach((el) => {
      el.style.visibility = "hidden";
      el.style.opacity = "0";
    });

    for (let j = 0; j < texts.length; ++j) {
      texts[j].classList.add("sidebar-texts-show");
    }
    close1.classList.add("close-end");
    closeImage.classList.add("close-rotate");
  }
});


const polygonMenu = document.querySelector('.polygon-sidebartext');
const polygonSub = document.querySelector('.polygon-sub');
polygonMenu.addEventListener('click', function() {
  polygonSub.classList.toggle('active'); // اضافه کردن یا حذف کردن کلاس active
});


const addresDiv = document.querySelector('.addres');
const addresInputDiv = document.querySelector('.addres-input');
const addresIcon = addresDiv.querySelector('.down-icon'); // آیکون مربوط به addres

const coordinateDiv = document.querySelector('.coordinate');
const coordinateInputDiv = document.querySelector('.coordinate-input');
const coordinateIcon = coordinateDiv.querySelector('.down-icon'); // آیکون مربوط به coordinate

addresDiv.addEventListener('click', function() {
  addresInputDiv.classList.toggle('active'); // اضافه یا حذف کردن کلاس active
  addresIcon.classList.toggle('rotate'); // چرخاندن آیکون
  coordinateInputDiv.classList.remove('active'); // بستن coordinate-input اگر باز باشد
  coordinateIcon.classList.remove('rotate'); // بازنشانی آیکون coordinate به حالت اولیه
});

coordinateDiv.addEventListener('click', function() {
  coordinateInputDiv.classList.toggle('active'); // اضافه یا حذف کردن کلاس active
  coordinateIcon.classList.toggle('rotate'); // چرخاندن آیکون
  addresInputDiv.classList.remove('active'); // بستن addres-input اگر باز باشد
  addresIcon.classList.remove('rotate'); // بازنشانی آیکون addres به حالت اولیه
});
// اضافه کردن رویداد برای بستن polygonSub وقتی روی closeImage کلیک شد
closeImage.addEventListener('click', function() {
  polygonSub.classList.remove('active'); // حذف کلاس active برای بستن polygonSub
});

// ******************map buttons link********************
document.addEventListener("DOMContentLoaded", function() {
  // انتخاب دکمه زوم اصلی
  var zoomInButton = document.querySelector('.leaflet-control-zoom-in');
  var zoomOutButton = document.querySelector('.leaflet-control-zoom-out');
  var polygon = document.querySelector('.leaflet-draw-draw-polygon');
  var edit = document.querySelector('.leaflet-draw-edit-edit');
  var deleteEdit = document.querySelector('.leaflet-draw-edit-remove');
  var circle = document.querySelector('.leaflet-draw-draw-circlemarker');
  var newZoomin = document.querySelector('.zoom-in');
  var newZoomout = document.querySelector('.zoom-out');
  var newPolygon = document.querySelector('.polygon-map');
  var newEdit = document.querySelector('.edit-button');
  var newDeleteEdit = document.querySelector('.delete-edit');

  
  if (zoomInButton) {
      // مخفی کردن دکمه اصلی
      zoomInButton.style.display = 'none'; // به طور کامل از DOM پنهان می‌شود
      // انتساب رویداد کلیک به دکمه جدید
      newZoomin.addEventListener('click', function() {
          zoomInButton.click();
      });
  } else {
      console.error('دکمه زوم اصلی پیدا نشد.');
  }


  if (zoomOutButton) {
    // مخفی کردن دکمه اصلی
    zoomOutButton.style.display = 'none'; // به طور کامل از DOM پنهان می‌شود
    // انتساب رویداد کلیک به دکمه جدید
    newZoomout.addEventListener('click', function() {
        zoomOutButton.click();
    });
} else {
    console.error('دکمه برگشت زوم اصلی پیدا نشد.');
}


if (polygon) {
  // مخفی کردن دکمه اصلی
  polygon.style.display = 'none'; // به طور کامل از DOM پنهان می‌شود
  // انتساب رویداد کلیک به دکمه جدید
  newPolygon.addEventListener('click', function() {
      polygon.click();
  });
} else {
  console.error('دکمه پلی گون اصلی پیدا نشد.');
}


if (edit) {
  // مخفی کردن دکمه اصلی
  edit.style.display = 'none'; // به طور کامل از DOM پنهان می‌شود
  // انتساب رویداد کلیک به دکمه جدید
  newEdit.addEventListener('click', function() {
      edit.click();
  });
} else {
  console.error('دکمه ادیت اصلی پیدا نشد.');
}


if (deleteEdit) {
  // مخفی کردن دکمه اصلی
  deleteEdit.style.display = 'none'; // به طور کامل از DOM پنهان می‌شود
  // انتساب رویداد کلیک به دکمه جدید
  newDeleteEdit.addEventListener('click', function() {
      deleteEdit.click();
  });
} else {
  console.error('دکمه دیلیت اصلی پیدا نشد.');
}
circle.style.display= 'none'
});



// **********دکمه جستجو و اعمال با اینتر***********
function searchCity() {
  // کد جستجو
  const searchValue = document.getElementById('city-search').value;
  alert('در حال جستجو برای: ' + searchValue);
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    searchCity();
  }
}