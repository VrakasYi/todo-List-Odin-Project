(()=>{"use strict";!function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="header",t.textContent="DO THE THING",e.appendChild(t);const n=document.createElement("div");n.id="main",e.appendChild(n);const d=document.createElement("div");d.id="left",n.appendChild(d);const c=document.createElement("div");c.id="projectList",d.appendChild(c);const o=document.createElement("button");o.id="newList",o.textContent="New project",d.appendChild(o);const i=document.createElement("div");i.id="popup",i.classList.add("inactive"),n.appendChild(i);const a=document.createElement("h3");a.textContent="Add a new project",i.appendChild(a);const l=document.createElement("form");l.id="newListForm",i.appendChild(l);const p=document.createElement("div");p.classList.add("form-element"),l.appendChild(p);const m=document.createElement("label");m.setAttribute("for","title"),p.appendChild(m);const s=document.createElement("input");s.type="text",s.id="title",s.placeholder="New project",p.appendChild(s);const u=document.createElement("div");u.id="popupButtCont",i.appendChild(u);const r=document.createElement("button");r.type="submit",r.textContent="Submit",u.appendChild(r);const C=document.createElement("button");C.type="button",C.textContent="Cancel",u.appendChild(C);const h=document.createElement("div");h.id="newTaskPop",h.classList.add("inactive"),n.appendChild(h);const E=document.createElement("form");E.id="newTaskForm",h.appendChild(E);const b=document.createElement("div");b.classList.add("form-element"),E.appendChild(b);const v=document.createElement("label");v.setAttribute("for","taskTitle"),b.appendChild(v);const x=document.createElement("input");x.type="text",x.id="taskTitle",x.placeholder="New Task",b.appendChild(x);const f=document.createElement("button");f.type="submit",f.textContent="Submit",E.appendChild(f);const w=document.createElement("div");w.id="listBox",n.appendChild(w)}()})();