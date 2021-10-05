let dropDown=document.querySelector("#searchItems"), searchBox=document.querySelector("#searchbox");const pages=[{pageName: "home", pageLink: "index.html"},{pageName: "portfolio", pageLink: "pages/portfolio.html"},{pageName: "gallery", pageLink: "pages/gallery.html"},{pageName: "tasks", pageLink: "pages/gallery_page_one.html"},{pageName: "typing test", pageLink: "pages/gallery_page_two.html"}];function clearList(parent){while(parent.firstChild) parent.removeChild(parent.firstChild);}function createListItem(iteration){let a=document.createElement("a"); a.setAttribute("class","dropdown-item py-1 link-primary fw-bold rounded-3"); a.setAttribute("href",`${pages[iteration].pageLink}`); a.innerText=`${pages[iteration].pageName.toLowerCase()}`; dropDown.append(a);}function randomListItem(iteration){let a=document.createElement("a"); a.setAttribute("class","dropdown-item py-1 link-primary fw-normal rounded-3"); a.setAttribute("href",`${pages[iteration].pageLink}`); a.innerText=`Suggested: ${pages[iteration].pageName.toLowerCase()}`; dropDown.append(a);}function listItems(){let randomPage=Math.floor(Math.random() * pages.length); dropDown.style.display="none"; clearList(dropDown); for(let i=0, j=0; j !=pages.length; i++){if(searchBox.value[i].toUpperCase()==pages[j].pageName.charAt(i).toUpperCase()){createListItem(j); dropDown.style.display="block"; break;}else j++;}randomListItem(randomPage);}searchBox.addEventListener('keydown', (e)=>{if(e.key==="Escape") searchBox.blur(); if(e.key==="Enter"){e.preventDefault(); for(let i=0, j=0; i < searchBox.value.length; i++){if(searchBox.value[i].toUpperCase()==pages[j].pageName.charAt(i).toUpperCase()){self.location=`${pages[j].pageLink}`; break;}else j++;}}else listItems();});document.addEventListener("keypress", (e)=>{if(e.ctrlKey && e.key.toLowerCase()==="y") self.location=`${pages[0].pageLink}`; if(e.key==="?" && searchBox !==document.activeElement && document.querySelector("#exampleModal") !==document.activeElement) $("#modalHelp").modal("show"); if(e.key==="/" && searchBox !==document.activeElement){e.preventDefault(); searchBox.focus();}});
