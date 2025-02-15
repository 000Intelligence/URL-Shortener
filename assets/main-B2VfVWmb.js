const d="#f43f5e",y="#10b981",I=(e,t)=>{Toastify({text:e,duration:2e3,position:"right",gravity:"top",style:{boxShadow:"none",borderRadius:"6px",background:t}}).showToast()};function C(e){({succsesAudio:new Audio("/assests/sound/discord-nofications.mp3"),dangerAudio:new Audio("/assests/sound/discord-leave.mp3"),scanAudio:new Audio("/assests/sound/qr-code-scan.mp3")})[e].play()}const g=document.querySelector(".qr-code-modal"),p=document.querySelector(".backdrop"),M=document.querySelector(".close-button"),x=document.getElementById("download");function $(){g.classList.replace("hidden","flex"),g.classList.add("fade-in")}function A(){g.classList.replace("flex","hidden"),g.classList.add("hidden")}function D(){p.classList.replace("hidden","block"),document.body.classList.add("overflow-hidden")}function T(){p.classList.replace("block","hidden"),document.body.classList.remove("overflow-hidden")}p.addEventListener("click",()=>{m.classList.add("hidden"),p.classList.add("hidden"),m.textContent="",A(),T()});M.addEventListener("click",()=>{A(),T()});x.addEventListener("click",()=>{let e=x.previousElementSibling.lastChild.src;x.setAttribute("href",e),x.setAttribute("download","qr-scan-image")});const m=document.querySelector(".info-modal"),a=document.getElementById("shortener-btn"),E=a.firstElementChild,q=a.lastElementChild,r=document.getElementById("url"),h=document.querySelector(".result-container"),H=document.querySelector(".side-nav-container"),j=document.getElementById("open-menu"),b=document.getElementById("side-nav"),R=document.getElementById("clear-localStorage"),N=/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;function s(e,t){I(e,t),C(t===d?"dangerAudio":"succsesAudio")}function O(e,t,o){const n=JSON.parse(localStorage.getItem("shortenedLinks"))||[];n.length>=5&&n.shift(),n.push({originalLink:e,shortenedLink:t,id:o}),localStorage.setItem("shortenedLinks",JSON.stringify(n))}function J(e){const o=(JSON.parse(localStorage.getItem("shortenedLinks"))||[]).filter(n=>n.id!==e);localStorage.setItem("shortenedLinks",JSON.stringify(o))}function w(){h.innerHTML="",(JSON.parse(localStorage.getItem("shortenedLinks"))||[]).forEach(t=>{B(t.originalLink,t.shortenedLink,t.id)})}const u={year:new Date().toLocaleDateString("fa-IR",{year:"numeric"}),month:new Date().toLocaleDateString("fa-IR",{month:"long"}),day:new Date().toLocaleDateString("fa-IR",{day:"numeric"})},B=(e,t,o)=>{const n=document.createElement("tr");n.classList.add("fade-in","bg-[rgb(24,30,41)]","bg-opacity-50","w-full"),n.innerHTML=`<td class="p-8 max-[1120px]:p-4">
								<div class="copy-container flex justify-between items-center"></div>
							</td>
							<!--  -->
							<td class="p-8 max-[1120px]:p-4 max-[1120px]:hidden">
								<a
									href="${e}"
									target="_blank"
									title="بازدید لینک"
									class="max-w-32 block overflow-hidden text-nowrap text-ellipsis duration-200 hover:text-[var(--brand-primary-pink)]">
									${e}
								</a>
							</td>
							<!--  -->
							<td class="p-8 max-[1120px]:p-4 max-[1120px]:hidden">
								<div class="qr-container"></div>
							</td>
							<!--  -->
							<td class="p-8 max-[1120px]:p-4 max-[1120px]:hidden">
								<p
									title="تعداد کلیک ها">
									0
								</p>
							</td>
							<!--  -->
							<td class="p-8 max-[1120px]:p-4 max-[1120px]:hidden">
								<p
									class="flex flex-row-reverse justify-end items-end gap-2 text-white text-opacity-60"
									title="تاریخ ایجاد">
									<span>${u.year}</span>
									<span>${u.month}</span>
									<span>${u.day}</span>
								</p>
							</td>
							<!--  -->
							<td class="p-8 max-[1120px]:p-4 max-[1120px]:hidden">
								<div class="delete-container"></div>
					</td>				
	`;const i=F(t),f=_(t),v=z(n,o),c=G(i,e,f,u.year,u.month,u.day,v);n.querySelector(".copy-container").appendChild(c),n.querySelector(".copy-container").prepend(i),n.querySelector(".qr-container").appendChild(f),n.querySelector(".delete-container").appendChild(v),n.setAttribute("table-id",o),h.prepend(n)},G=(e,t,o,n,i,f,v)=>{const c=document.createElement("div");return c.classList.add("hidden","max-[1120px]:block"),c.innerHTML=`<button
					title="باز کردن"
					class="text-xl flex justify-center items-center w-10 h-10 px-3 py-3 rounded-full bg-[var(--lite-border)] duration-200 hover:bg-[var(--brand-primary-blue)] group">
					<ion-icon
					name="eye-outline"
					class="duration-200 group-hover:text-white"></ion-icon>
					</button>`,c.querySelector("button").addEventListener("click",()=>{const l=document.createElement("div");l.classList.add("flex","flex-col","gap-8");const k=document.createElement("div");k.innerHTML=`<div class="flex flex-row-reverse justify-end items-end gap-2 text-white text-opacity-60">
		<span>${n}</span>
		<span>${i}</span>
		<span>${f}</span>
		</div>`;const S=document.createElement("div");S.innerHTML=`<a href="${t}" target="_blank" class="duration-200 hover:text-[var(--brand-primary-pink)]">${t}</a>`;const L=document.createElement("header");L.classList.add("flex","justify-between","items-center"),L.appendChild(o),L.appendChild(v),l.appendChild(L),l.appendChild(e),l.appendChild(S),l.appendChild(k),m.appendChild(l),m.classList.replace("hidden","fade-in"),p.classList.remove("hidden"),document.body.classList.add("overflow-hidden"),w()}),c},F=e=>{const t=document.createElement("div");return t.classList.add("flex","items-center","gap-2"),t.innerHTML=`
					<button
					title="کپی در کلیپ بورد"
					class="text-xl flex justify-center items-center w-10 h-10 px-3 py-3 rounded-full bg-[var(--lite-border)] duration-200 hover:bg-[var(--brand-primary-pink)] group">
					<ion-icon
					name="copy-outline"
					class="duration-200 group-hover:text-white"></ion-icon>
					</button>
					<a
					href="${e}"
					target="_blank"
					title="بازدید لینک"
					class="hover:text-[var(--brand-primary-pink)] duration-200 max-w-[200px] overflow-hidden text-nowrap text-ellipsis max-[380px]:max-w-[100px]">
					${e}
					</a>	
	`,t.querySelector("button").addEventListener("click",()=>{navigator.clipboard.writeText(e),s("با موفقیت کپی شد",y)}),t},_=e=>{const t=document.createElement("div");return t.innerHTML=`
				<button
				title="qrcode"
				class="qr-btn"
				>
				<img
				src="/assests/icons/qrcode.png"
				alt="qrcode"
				class="w-full h-full" />
				</button>	
	`,t.querySelector("button").addEventListener("click",()=>{C("scanAudio");const o=document.getElementById("qrcode");o.classList.add("scanner"),setTimeout(()=>{o.classList.remove("scanner")},3e3),o.innerHTML="",$(),D(),new QRCode(o,{text:e,width:420,height:420,colorDark:"#fff",colorLight:"#000",correctLevel:QRCode.CorrectLevel.H})}),t},z=(e,t)=>{const o=document.createElement("div");return o.innerHTML=`
					<button
					title="پاک کردن"
					class="flex justify-center items-center text-2xl w-12 h-12 rounded-full border-2 border-rose-500 text-rose-500 duration-200 hover:opacity-70">
					<ion-icon name="trash-outline"></ion-icon>
					</button>
	`,o.querySelector("button").addEventListener("click",()=>{m.innerHTML="",m.classList.add("hidden"),p.classList.add("hidden"),document.body.classList.remove("overflow-hidden"),J(t),e.remove(),h.innerHTML="",w(),s("بخش مورد نظر حذف شد",d)}),o};function P(){h.childElementCount>5&&h.lastElementChild.remove()}a.addEventListener("click",async()=>{let e=r.value;if(e===""||e===null){r.classList.add("border-rose-500"),s("مقدار فرم خالی میباشد",d);return}if(!N.test(e)){r.value="",r.classList.add("border-rose-500"),s("مقدار وارد شده معتبر نمیباشد",d);return}if(!window.navigator.onLine){r.value="",r.classList.add("border-rose-500"),s("لطفا اینترنت خود را بررسی کنید",d);return}r.classList.remove("border-rose-500"),a.setAttribute("loading",!0),a.setAttribute("lite",!0),a.setAttribute("disabled",!0),E.classList.add("hidden"),q.classList.remove("hidden"),window.location.href="#table",setTimeout(async()=>{try{const t=await fetch("https://url-shortener-service.p.rapidapi.com/shorten",{method:"POST",headers:{"x-rapidapi-key":"8ae2231c9fmsh16c33a7ca564496p144334jsna9c67947ba81","x-rapidapi-host":"url-shortener-service.p.rapidapi.com","Content-Type":"application/x-www-form-urlencoded"},body:`url=${e}`});if(t.status===429){s("تعداد درخواست ها بیش از حد مجاز میباشد, لطفا بعدا امتحان کنید",d);return}const o=await t.text(),n=o?o.slice(15,-2):"متاسفانه جوابی دریافت نشد.",i=`tr-${Date.now()}`;B(e,n,i),O(e,n,i),P(),s("لینک کوتاه با موفقیت اضافه شد",y)}catch{setTimeout(()=>{s("لطفا فیلترشکن خود را بررسی کنید",d),console.clear()},1e3)}finally{r.value="",a.removeAttribute("loading"),a.removeAttribute("lite"),a.removeAttribute("disabled"),E.classList.remove("hidden"),q.classList.add("hidden")}},1e3)});H&&(j.addEventListener("click",()=>{b.classList.toggle("hidden"),b.classList.toggle("fade-in")}),window.addEventListener("click",e=>{e.target.closest(".side-nav-container")||(b.classList.add("hidden"),b.classList.remove("fade-in"))}));R.addEventListener("click",()=>{localStorage.getItem("shortenedLinks")==null||localStorage.getItem("shortenedLinks")=="[]"?s("داده ای موجود نیست",d):(localStorage.removeItem("shortenedLinks"),h.innerHTML="",s("داده ها حذف شدند",y))});document.addEventListener("DOMContentLoaded",w);
