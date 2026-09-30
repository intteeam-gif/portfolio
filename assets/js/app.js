'use strict';
const services=[
['💻','تصميم وتطوير المواقع','Website Design & Development','إنشاء مواقع احترافية للشركات والأفراد.'],
['🛒','تصميم المتاجر الإلكترونية','E-Commerce Stores','تصميم وتطوير المتاجر الإلكترونية وتجربة الشراء.'],
['🎨','تصميم UI/UX','UI/UX Design','تصميم واجهات وتجربة مستخدم احترافية.'],
['📈','إدارة الحملات الإعلانية','Paid Advertising','إنشاء وإدارة الحملات الإعلانية ومتابعة الأداء.'],
['📱','إدارة المحتوى والسوشيال ميديا','Content & Social Media','إدارة المحتوى والتصميمات والمنصات الاجتماعية.'],
['🔄','نقل بيانات الشركات','Business Data Migration','نقل البيانات بين الأنظمة والخوادم والمنصات.'],
['💾','النسخ الاحتياطي','Backup & Restore','حلول النسخ الاحتياطي والاستعادة.'],
['⚙️','الخدمات الرقمية للشركات','Digital Business Services','حلول رقمية مخصصة حسب احتياج الشركة.']
];
const packages=[
['Google Ads','Starter','1,500 ريال / شهر'],['Google Ads','Growth','2,500 ريال / شهر'],['Google Ads','Scale','4,000 ريال / شهر'],
['Meta Ads','Starter','1,500 ريال / شهر'],['Meta Ads','Growth','2,500 ريال / شهر'],['Meta Ads','Scale','4,000 ريال / شهر'],
['TikTok Ads','Starter','1,500 ريال / شهر'],['TikTok Ads','Growth','2,500 ريال / شهر'],['TikTok Ads','Scale','4,000 ريال / شهر'],
['Snapchat Ads','Starter','1,500 ريال / شهر'],['Snapchat Ads','Growth','2,500 ريال / شهر'],['Snapchat Ads','Scale','4,000 ريال / شهر'],
['LinkedIn Ads','Starter','2,000 ريال / شهر'],['LinkedIn Ads','Growth','3,500 ريال / شهر'],['LinkedIn Ads','Scale','5,000 ريال / شهر'],
['Multi-Platform Growth','Growth','6,000 ريال / شهر'],
['Website','Starter','من 2,500 ريال'],['Website','Business','من 4,500 ريال'],['Website','Premium','من 7,500 ريال'],
['Store','Starter','من 3,500 ريال'],['Store','Business','من 6,500 ريال'],['Store','Premium','من 10,000 ريال'],['E-Commerce Growth','Growth','من 15,000 ريال']
];
let lang='ar';
function render(){
 const sg=document.getElementById('servicesGrid'); sg.innerHTML=services.map(s=>'<article class="card"><div style="font-size:28px">'+s[0]+'</div><h3>'+s[lang==='ar'?1:2]+'</h3><p>'+s[3]+'</p></article>').join('');
 const pg=document.getElementById('packagesGrid'); pg.innerHTML=packages.map(p=>'<article class="card"><h3>'+p[0]+' — '+p[1]+'</h3><p><strong>'+p[2]+'</strong></p><p>إدارة وتنفيذ حسب نطاق الباقة، مع متابعة وتحسين وتقارير وفق الخدمة.</p></article>').join('');
 document.querySelectorAll('[data-ar]').forEach(el=>{el.textContent=el.dataset[lang==='ar'?'ar':'en']});
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.dir=document.documentElement.dir;
 document.getElementById('langSwitch').textContent=lang==='ar'?'EN':'AR';
}
document.getElementById('langSwitch').addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';render()});
render();
