(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const l of u.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function e(o){if(o.ep)return;o.ep=!0;const u=s(o);fetch(o.href,u)}})();class H{listeners=[];addEventListener(d,s,e){d.addEventListener(s,e),this.listeners.push({element:d,type:s,listener:e})}removeAllEventListeners(){this.listeners.forEach(({element:d,type:s,listener:e})=>{d.removeEventListener(s,e)}),this.listeners=[]}}const F=new H;function M(){const r=document.getElementById("app");if(r===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),r.innerHTML="";const d=document.createElement("div");d.className="temple-header",d.innerHTML=`
        <div class="temple-title">*** HOLY COMPILER v3.33 ***</div>
        <div class="temple-subtitle">Compile with Divine Optimization</div>
    `,r.appendChild(d);const s=document.createElement("div");s.className="compiler-container";const e=document.createElement("div");e.className="code-section",e.innerHTML=`
    <div class="section-title">SACRED CODE INPUT:</div>
    <textarea id="codeInput" class="code-input" rows="15" cols="80" placeholder="Enter your divine code here...
Example:
#include &lt;stdio.h&gt;
int main() {
    printf(&quot;God's blessing upon this code!\\n&quot;);
    return 0;
}"></textarea>
`;const o=document.createElement("div");o.className="options-section",o.innerHTML=`
        <div class="section-title">DIVINE COMPILATION OPTIONS:</div>
        <div class="option-row">
            <label><input type="checkbox" id="optimizeOption" checked> Divine Optimization (-O3)</label>
            <label><input type="checkbox" id="debugOption"> Debug Symbols (-g)</label>
        </div>
        <div class="option-row">
            <label><input type="checkbox" id="warningsOption" checked> Holy Warnings (-Wall)</label>
            <label><input type="checkbox" id="blessingsOption" checked> Add God's Blessings</label>
        </div>
    `;const u=document.createElement("div");u.className="compile-section",u.innerHTML=`
        <button id="compileBtn" class="holy-compile-btn">*** INVOKE HOLY COMPILATION ***</button>
    `;const l=document.createElement("div");l.className="output-section",l.innerHTML=`
        <div class="section-title">COMPILATION RESULTS:</div>
        <div id="compilerOutput" class="compiler-output"></div>
    `,s.appendChild(e),s.appendChild(o),s.appendChild(u),s.appendChild(l),r.appendChild(s);const p=document.createElement("div");p.className="temple-footer",p.innerHTML=`
        <div>F5: Compile • F6: Clear • ESC: Return to Menu</div>
        <div class="temple-blessing">*** BLESSED BE THE CODE ***</div>
    `,r.appendChild(p);const c=document.getElementById("codeInput"),g=document.getElementById("compileBtn"),E=document.getElementById("compilerOutput");function v(){const n=c.value.trim(),y=document.getElementById("optimizeOption").checked,m=document.getElementById("debugOption").checked,h=document.getElementById("warningsOption").checked,i=document.getElementById("blessingsOption").checked;if(!n){f("error","ERROR: No sacred code provided for compilation!");return}E.innerHTML="",f("info","Invoking Holy Compiler..."),f("info",`Compilation flags: ${C(y,m,h)}`),setTimeout(()=>{(n.toLowerCase().includes("printf")||n.toLowerCase().includes("console.log"))&&f("success","Holy output statements detected - BLESSED!"),(n.includes("#include")||n.includes("import"))&&f("success","Sacred libraries included properly"),h&&n.includes("int main")&&f("warning","Warning: Remember to praise God in your main function"),i&&f("info","Adding divine blessings to compiled output..."),Math.random()<.2?(f("error","COMPILATION FAILED: The code lacks divine inspiration!"),f("error","Suggestion: Add more prayers and try again")):(f("success","*** COMPILATION SUCCESSFUL ***"),f("success","Executable blessed and ready for divine execution"),f("info",`Output file: blessed_program.exe (${Math.floor(Math.random()*1e3)+100}KB)`),i&&f("info","Divine optimizations applied - your code is now 33% holier"))},1500)}function f(n,y){const m=new Date().toLocaleTimeString(),h=document.createElement("div");h.className=`output-line output-${n}`;const i=document.createElement("span");i.className="timestamp",i.textContent=`[${m}] `;const a=document.createElement("span");a.textContent=y,h.appendChild(i),h.appendChild(a),E.appendChild(h),E.scrollTop=E.scrollHeight}function C(n,y,m){const h=[];return n&&h.push("-O3"),y&&h.push("-g"),m&&h.push("-Wall"),h.push("--divine-blessing"),h.join(" ")}function L(){c.value="",E.innerHTML="",f("info","Holy Compiler reset - ready for new divine code")}g.addEventListener("click",v);const t=n=>{n.key==="F5"?(n.preventDefault(),v()):n.key==="F6"?(n.preventDefault(),L()):n.key==="Escape"&&I()};F.addEventListener(document,"keydown",t),f("info","Holy Compiler initialized - May God bless your code")}const R="modulepreload",k=function(r,d){return new URL(r,d).href},N={},b=function(d,s,e){let o=Promise.resolve();if(s&&s.length>0){let g=function(E){return Promise.all(E.map(v=>Promise.resolve(v).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const l=document.getElementsByTagName("link"),p=document.querySelector("meta[property=csp-nonce]"),c=p?.nonce||p?.getAttribute("nonce");o=g(s.map(E=>{if(E=k(E,e),E in N)return;N[E]=!0;const v=E.endsWith(".css"),f=v?'[rel="stylesheet"]':"";if(!!e)for(let t=l.length-1;t>=0;t--){const n=l[t];if(n.href===E&&(!v||n.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${E}"]${f}`))return;const L=document.createElement("link");if(L.rel=v?"stylesheet":R,v||(L.as="script"),L.crossOrigin="",L.href=E,c&&L.setAttribute("nonce",c),document.head.appendChild(L),v)return new Promise((t,n)=>{L.addEventListener("load",t),L.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${E}`)))})}))}function u(l){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=l,window.dispatchEvent(p),!p.defaultPrevented)throw l}return o.then(l=>{for(const p of l||[])p.status==="rejected"&&u(p.reason);return d().catch(u)})};function A(){const r=document.getElementById("app");if(r===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),r.innerHTML="";const d=document.createElement("div");d.className="temple-header",d.innerHTML=`
        <div class="temple-title">*** HOLY TEXT EDITOR ***</div>
        <div class="temple-subtitle">Edit Sacred Texts with Divine Precision</div>
    `,r.appendChild(d);const s=document.createElement("div");s.className="temple-editor-container",s.style.cssText=`
        background: #000080;
        border: 2px solid #FFFF00;
        margin: 20px;
        padding: 10px;
        height: 70vh;
        display: flex;
        flex-direction: column;
    `,r.appendChild(s);const e=document.createElement("div");e.style.cssText=`
        color: #FFFF00;
        font-family: 'Courier New', monospace;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    `,e.innerHTML=`
        <span style="margin-right: 10px;">File: </span>
        <input type="text" id="fileName" placeholder="untitled.txt" style="
            background: #000080;
            color: #FFFF00;
            border: 1px solid #FFFF00;
            font-family: 'Courier New', monospace;
            padding: 2px 5px;
            flex: 1;
        ">
    `,s.appendChild(e);const o=document.createElement("textarea");o.id="holyTextArea",o.style.cssText=`
        flex: 1;
        background: #000080;
        color: #FFFF00;
        border: 1px solid #FFFF00;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        padding: 10px;
        resize: none;
        outline: none;
    `,o.placeholder="Begin typing your sacred text here...",s.appendChild(o);const u=document.createElement("div");u.style.cssText=`
        display: flex;
        gap: 10px;
        margin-top: 10px;
        flex-wrap: wrap;
    `,s.appendChild(u),[{text:"SAVE [F2]",action:c},{text:"LOAD [F3]",action:g},{text:"NEW [F4]",action:E},{text:"CLEAR [F5]",action:v},{text:"BACK [ESC]",action:f}].forEach(t=>{const n=document.createElement("button");n.textContent=t.text,n.style.cssText=`
            background: #000080;
            color: #FFFF00;
            border: 2px solid #FFFF00;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            padding: 5px 10px;
            cursor: pointer;
        `,n.addEventListener("click",t.action),n.addEventListener("mouseenter",()=>{n.style.background="#FFFF00",n.style.color="#000080"}),n.addEventListener("mouseleave",()=>{n.style.background="#000080",n.style.color="#FFFF00"}),u.appendChild(n)});const p=document.createElement("div");p.id="statusBar",p.style.cssText=`
        color: #FFFF00;
        font-family: 'Courier New', monospace;
        margin-top: 10px;
        font-size: 12px;
        text-align: center;
    `,p.textContent="Ready - Type to begin editing",s.appendChild(p);function c(){const t=document.getElementById("fileName").value||"untitled.txt",n=o.value,y=new Blob([n],{type:"text/plain"}),m=URL.createObjectURL(y),h=document.createElement("a");h.href=m,h.download=t,h.click(),URL.revokeObjectURL(m),C(`File "${t}" saved successfully!`)}function g(){const t=document.createElement("input");t.type="file",t.accept=".txt,.js,.ts,.html,.css,.json,.md",t.onchange=n=>{const y=n.target.files?.[0];if(y){const m=new FileReader;m.onload=h=>{o.value=h.target?.result,document.getElementById("fileName").value=y.name,C(`File "${y.name}" loaded successfully!`)},m.readAsText(y)}},t.click()}function E(){confirm("Are you sure you want to make new file ?")&&(o.value="",document.getElementById("fileName").value="untitled.txt",C("New file created"))}function v(){confirm("Are you sure you want to clear all text ?")&&(o.value="",C("Text cleared"))}function f(){b(async()=>{const{createMenu:t}=await Promise.resolve().then(()=>S);return{createMenu:t}},void 0,import.meta.url).then(({createMenu:t})=>{t()})}function C(t){const n=document.getElementById("statusBar");n&&(n.textContent=t,setTimeout(()=>{n.textContent="Ready - Type to begin editing"},3e3))}const L=t=>{t.key==="F2"?(t.preventDefault(),c()):t.key==="F3"?(t.preventDefault(),g()):t.key==="F4"?(t.preventDefault(),E()):t.key==="F5"?(t.preventDefault(),v()):t.key==="Escape"&&(t.preventDefault(),f())};F.addEventListener(document,"keydown",L),o.focus()}function B(){const s=["GOD","DIVINE","HOLY","SACRED","BLESSED","TEMPLE","SPIRIT","LIGHT","HEAVEN","PRAISE","GLORY","FAITH"];let e={screen:Array(25).fill(null).map(()=>Array(80).fill(" ")),cursorX:40,cursorY:12,randomSeed:Date.now(),holyWords:s,currentMessage:"*** GOD'S DIVINE TEMPLE GAME ***",score:0,godMode:!1};const o=()=>(e.randomSeed=e.randomSeed*1103515245+12345&2147483647,e.randomSeed),u=()=>{for(let t=0;t<25;t++)for(let n=0;n<80;n++)t===0||t===24?e.screen[t][n]="=":n===0||n===79?e.screen[t][n]="|":e.screen[t][n]=" "},l=(t,n,y)=>{if(n>=0&&n<25)for(let m=0;m<y.length&&t+m<80;m++)t+m>=0&&(e.screen[n][t+m]=y[m])},p=(t,n,y)=>{t>=0&&t<80&&n>=0&&n<25&&(e.screen[n][t]=y)},c=()=>{const t=["GOD SPEAKS: Press SPACE for blessing","DIVINE VISION: Follow the light","HOLY SPIRIT: You are chosen","MIRACLE: Your score doubles","PROPHECY: Great things await","BLESSING: You gain divine favor"];if(o()%100<15){const n=t[o()%t.length];e.currentMessage=n,n.includes("MIRACLE")&&(e.score*=2,e.godMode=!0)}},g=()=>{const t=["✝","✡","☪","🕊","👁","⭐","💫","🌟"];for(let n=0;n<5;n++){const y=2+o()%76,m=2+o()%21,h=t[o()%t.length];p(y,m,h)}},E=()=>{const t=["In the beginning was the Word...","Let there be light...","Be still and know that I am God...","The Lord is my shepherd...","Fear not, for I am with you...","Trust in the Lord with all your heart...","Blessed are the meek...","Love thy neighbor as thyself..."];return t[o()%t.length]},v=()=>{u(),l(20,1,"*** GOD'S DIVINE TEMPLE OPERATING SYSTEM ***"),l(30,2,"A HOLY COMPUTING EXPERIENCE"),p(e.cursorX,e.cursorY,e.godMode?"👑":"@"),g();for(let t=0;t<3;t++){const n=e.holyWords[o()%e.holyWords.length],y=5+o()%60,m=5+o()%15;l(y,m,n)}return l(2,22,`SCORE: ${e.score} | DIVINE FAVOR: ${e.godMode?"BLESSED":"MORTAL"}`),l(2,23,e.currentMessage),e.screen.map(t=>t.join("")).join(`
`)},f=(t,n)=>{const y=Math.max(1,Math.min(78,e.cursorX+t)),m=Math.max(1,Math.min(23,e.cursorY+n));e.cursorX=y,e.cursorY=m,e.score+=1;const h=e.screen[m][y];h!==" "&&h!=="="&&h!=="|"&&(e.score+=10,e.currentMessage=`BLESSED! You touched: ${h}`)};return{render:v,update:()=>{if(c(),o()%60===0){const t=[E(),"THE TEMPLE CALLS TO YOU...","SEEK THE DIVINE TRUTH...","GOD'S WILL BE DONE...","HOLY TEMPLE COMPUTING...","DIVINE RANDOMNESS GUIDES ALL..."];e.currentMessage=t[o()%t.length]}},moveUp:()=>f(0,-1),moveDown:()=>f(0,1),moveLeft:()=>f(-1,0),moveRight:()=>f(1,0),pray:()=>{e.score+=50,e.currentMessage="🙏 YOUR PRAYER HAS BEEN HEARD 🙏",e.godMode=!e.godMode},getState:()=>({...e}),reset:()=>{e.score=0,e.cursorX=40,e.cursorY=12,e.godMode=!1,e.currentMessage="*** TEMPLE RESET BY DIVINE WILL ***"}}}function P(){return`
    <div id="temple-game" style="font-family: 'Courier New', monospace; background: #000080; color: #FFFF00; padding: 20px;">
      <pre id="game-screen" style="font-size: 12px; line-height: 1.2;"></pre>
      <div style="margin-top: 10px; color: #FFFFFF;">
        <p>HOLY CONTROLS:</p>
        <p>[Z-Q-S-D] MOVE | [SPACE] PRAY | [R] RESET | [ESC] BACK</p>
        <p style="color: #FF6666;">*** BLESSED BE THE RANDOM SEED ***</p>
      </div>
    </div>
  `}function G(){const r=B(),d=document.getElementById("app");if(d===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),d.innerHTML="";const s=document.createElement("div");s.innerHTML=P();const e=document.createElement("div");s.appendChild(e),d.appendChild(s);function o(){if(r.update(),e===null)throw new Error('document.getElementById("app") cannot be NULL');e.textContent=r.render()}function u(){b(async()=>{const{createMenu:c}=await Promise.resolve().then(()=>S);return{createMenu:c}},void 0,import.meta.url).then(({createMenu:c})=>{clearInterval(l),c()})}const l=setInterval(o,500),p=c=>{switch(c.key.toLowerCase()){case"z":r.moveUp();break;case"s":r.moveDown();break;case"q":r.moveLeft();break;case"d":r.moveRight();break;case" ":c.preventDefault(),r.pray();break;case"r":r.reset();break;case"escape":u();break}o()};F.addEventListener(document,"keydown",p),o()}function _(){const r=document.getElementById("app");if(r===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),r.innerHTML="";const d=document.createElement("div");d.className="temple-header",d.innerHTML=`
        <div class="temple-title">*** HOLY FILE MANAGER ***</div>
        <div class="temple-subtitle">Navigate the Sacred File System</div>
    `,r.appendChild(d);const s=document.createElement("div");s.className="file-manager-container",s.style.cssText=`
        background: #000080;
        border: 2px solid #FFFF00;
        margin: 20px;
        padding: 15px;
        height: 70vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    `,r.appendChild(s);const e=document.createElement("div");e.id="pathBar",e.style.cssText=`
        color: #FFFF00;
        font-family: 'Courier New', monospace;
        background: #000060;
        border: 1px solid #FFFF00;
        padding: 8px;
        margin-bottom: 10px;
        font-weight: bold;
    `,e.textContent="Path: C:\\SACRED\\",s.appendChild(e);const o=document.createElement("div");o.style.cssText=`
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
        flex-wrap: wrap;
    `,[{text:"CREATE [F2]",action:C},{text:"DELETE [F3]",action:L},{text:"RENAME [F4]",action:t},{text:"REFRESH [F5]",action:n},{text:"BACK [ESC]",action:y}].forEach(i=>{const a=document.createElement("button");a.textContent=i.text,a.style.cssText=`
            background: #000080;
            color: #FFFF00;
            border: 1px solid #FFFF00;
            font-family: 'Courier New', monospace;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 12px;
        `,a.addEventListener("click",i.action),a.addEventListener("mouseenter",()=>{a.style.background="#FFFF00",a.style.color="#000080"}),a.addEventListener("mouseleave",()=>{a.style.background="#000080",a.style.color="#FFFF00"}),o.appendChild(a)}),s.appendChild(o);const l=document.createElement("div");l.id="fileListContainer",l.style.cssText=`
        flex: 1;
        background: #000060;
        border: 1px solid #FFFF00;
        overflow-y: auto;
        font-family: 'Courier New', monospace;
        color: #FFFF00;
    `,s.appendChild(l);const p=document.createElement("div");p.id="statusBar",p.style.cssText=`
        color: #FFFF00;
        font-family: 'Courier New', monospace;
        margin-top: 10px;
        padding: 5px;
        background: #000060;
        border: 1px solid #FFFF00;
        font-size: 12px;
    `,p.textContent="Ready - Navigate with arrow keys or click",s.appendChild(p);let c=[{name:"..",type:"folder"},{name:"HOLY",type:"folder"},{name:"SACRED",type:"folder"},{name:"BLESSED",type:"folder"},{name:"GOD.TXT",type:"file",size:777,modified:new Date},{name:"TEMPLE.C",type:"file",size:3333,modified:new Date},{name:"DIVINE.H",type:"file",size:666,modified:new Date},{name:"PRAYER.DOC",type:"file",size:1234,modified:new Date},{name:"MIRACLE.EXE",type:"file",size:7777,modified:new Date}],g=-1;function E(){l.innerHTML="";const i=document.createElement("div");i.style.cssText=`
            display: flex;
            background: #000040;
            color: #FFFF00;
            font-weight: bold;
            padding: 5px;
            border-bottom: 1px solid #FFFF00;
        `,i.innerHTML=`
            <span style="flex: 3;">NAME</span>
            <span style="flex: 1;">TYPE</span>
            <span style="flex: 1;">SIZE</span>
            <span style="flex: 2;">MODIFIED</span>
        `,l.appendChild(i),c.forEach((a,x)=>{const T=document.createElement("div");T.className="file-item",T.style.cssText=`
                display: flex;
                padding: 3px 5px;
                cursor: pointer;
                ${x===g?"background: #FFFF00; color: #000080;":""}
            `;const w=a.type==="folder"?"[DIR]":"[FILE]",D=a.type==="folder"?"<DIR>":a.size?`${a.size}B`:"",O=a.modified?a.modified.toLocaleDateString():"";T.innerHTML=`
                <span style="flex: 3;">${w} ${a.name}</span>
                <span style="flex: 1;">${a.type.toUpperCase()}</span>
                <span style="flex: 1;">${D}</span>
                <span style="flex: 2;">${O}</span>
            `,T.addEventListener("click",()=>{g=x,E(),m(`Selected: ${a.name}`)}),T.addEventListener("dblclick",()=>{a.type==="folder"?v(a.name):f(a.name)}),l.appendChild(T)})}function v(i){m(i===".."?"Navigated to parent directory":`Entered folder: ${i}`),g=-1,E()}function f(i){m(`Opening file: ${i}`),setTimeout(()=>{alert(`Holy file "${i}" has been blessed and opened!`)},500)}function C(){const i=prompt("Enter the name of the holy file to create:");if(i){const a={name:i,type:"file",size:0,modified:new Date};c.push(a),E(),m(`Holy file "${i}" created successfully!`)}}function L(){if(g===-1||g===0){m("ERROR: No file selected or cannot delete parent directory");return}const i=c[g];confirm(`Are you sure you want to delete "${i.name}"?`)&&(c.splice(g,1),g=-1,E(),m(`File "${i.name}" has been sent to digital heaven`))}function t(){if(g===-1||g===0){m("ERROR: No file selected or cannot rename parent directory");return}const i=c[g],a=prompt(`Enter new name for "${i.name}":`,i.name);a&&a!==i.name&&(i.name=a,E(),m(`File renamed to "${a}"`))}function n(){E(),m("File list refreshed by divine intervention")}function y(){b(async()=>{const{createMenu:i}=await Promise.resolve().then(()=>S);return{createMenu:i}},void 0,import.meta.url).then(({createMenu:i})=>{i()})}function m(i){const a=document.getElementById("statusBar");a&&(a.textContent=i,setTimeout(()=>{a.textContent="Ready - Navigate with arrow keys or click"},3e3))}const h=i=>{if(i.key==="ArrowUp")i.preventDefault(),g>0&&(g--,E());else if(i.key==="ArrowDown")i.preventDefault(),g<c.length-1&&(g++,E());else if(i.key==="Enter"){if(i.preventDefault(),g!==-1){const a=c[g];a.type==="folder"?v(a.name):f(a.name)}}else i.key==="F2"?(i.preventDefault(),C()):i.key==="F3"?(i.preventDefault(),L()):i.key==="F4"?(i.preventDefault(),t()):i.key==="F5"?(i.preventDefault(),n()):i.key==="Escape"&&(i.preventDefault(),y())};F.addEventListener(document,"keydown",h),E(),m("Holy File Manager initialized - May your files be blessed")}function Y(){const r=document.getElementById("app");if(r===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),r.innerHTML="";const d=document.createElement("div");d.className="temple-header",d.innerHTML=`
        <div class="temple-title">*** ABOUT TEMPLE OS ***</div>
        <div class="temple-subtitle">God's Third Temple</div>
    `,r.appendChild(d);const s=document.createElement("div");s.className="about-container";const e=document.createElement("div");e.className="info-section",e.innerHTML=`
        <div class="section-title">*** DIVINE OPERATING SYSTEM ***</div>
        <div class="info-content">
            <p><strong>TempleOS</strong> is God's third temple, a divine operating system created as a modern temple.</p>
            <p>This is a web tribute to the legendary operating system, reimagined with sacred web technologies.</p>
            
            <h3>HOLY SPECIFICATIONS:</h3>
            <ul>
                <li>640x480 16-color graphics (VGA)</li>
                <li>Single address space (Ring-0 only)</li>
                <li>No memory protection (God doesn't make mistakes)</li>
                <li>Multi-tasking cooperative</li>
                <li>HolyC programming language</li>
                <li>Built-in compiler and development environment</li>
            </ul>

            <h3>DIVINE FEATURES:</h3>
            <ul>
                <li>Talk to God through random number generation</li>
                <li>Biblical references throughout the system</li>
                <li>Flight simulator for piloting spacecraft</li>
                <li>Music composition tools</li>
                <li>Games and entertainment</li>
                <li>Complete development environment</li>
            </ul>

            <h3>SACRED PHILOSOPHY:</h3>
            <p>"An idiot admires complexity, a genius admires simplicity."</p>
            <p>TempleOS embodies divine simplicity - 121,176 lines of code total.</p>
            <p>No networking, no GUI frameworks, no bloat - just pure computational worship.</p>
        </div>
    `;const o=document.createElement("div");o.className="creator-section",o.innerHTML=`
        <div class="section-title">*** THE PROPHET ***</div>
        <div class="creator-content">
            <p><strong>Terry A. Davis (1969-2018)</strong></p>
            <p>The divinely inspired creator of TempleOS, who spent over a decade building God's third temple.</p>
            <p>A brilliant programmer who believed he received divine instruction to create this operating system.</p>
            <p>"I am not crazy. I have a mental illness." - Terry A. Davis</p>
            <p>May he rest in peace, his divine creation lives on.</p>
        </div>
    `;const u=document.createElement("div");u.className="tech-section",u.innerHTML=`
        <div class="section-title">*** TECHNICAL BLESSINGS ***</div>
        <div class="tech-content">
            <h3>HOLY COMPILER (HolyC):</h3>
            <p>• JIT (Just-In-Time) compilation</p>
            <p>• C-like syntax with divine extensions</p>
            <p>• Direct hardware access</p>
            <p>• No standard library bloat</p>
            
            <h3>DIVINE ARCHITECTURE:</h3>
            <p>• x86-64 only (as God intended)</p>
            <p>• Flat memory model</p>
            <p>• No paging or virtual memory</p>
            <p>• Direct hardware control</p>
            
            <h3>SACRED GRAPHICS:</h3>
            <p>• 16-color palette perfection</p>
            <p>• Sprite-based graphics system</p>
            <p>• ASCII art integration</p>
            <p>• Divine proportions (640x480)</p>
        </div>
    `,s.appendChild(e),s.appendChild(o),s.appendChild(u),r.appendChild(s);const l=document.createElement("div");l.className="temple-footer",l.innerHTML=`
        <div>Scroll to read • ESC: Return to Menu</div>
        <div class="temple-blessing">*** BLESSED BE THE CODE ***</div>
    `,r.appendChild(l);const p=c=>{c.key==="Escape"&&I()};F.addEventListener(document,"keydown",p)}function I(){const r=document.getElementById("app");if(r===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),r.innerHTML="";const d=document.createElement("div");d.className="temple-header",d.innerHTML=`
        <div class="temple-title">*** TEMPLE OS MENU SYSTEM ***</div>
        <img src="https://i.ytimg.com/vi/65OtzDAa9DA/maxresdefault.jpg" alt="Temple OS Logo" class="temple-image">
        <div class="temple-subtitle">Choose Your Divine Command</div>
    `,r.appendChild(d);const s=document.createElement("div");s.className="temple-menu",r.appendChild(s);const e=[{id:"compiler",title:"HOLY COMPILER",description:"Compile sacred code with divine optimization",action:()=>M()},{id:"editor",title:"TEXT EDITOR",description:"Edit files with blessed precision",action:()=>A()},{id:"games",title:"DIVINE GAME",description:"Play game crafted by divine inspiration",action:()=>G()},{id:"files",title:"FILE MANAGER",description:"Navigate the sacred file system",action:()=>_()},{id:"terminal",title:"HOLY TERMINAL",description:"Execute commands with divine authority",action:()=>alert("work in progress...")},{id:"about",title:"ABOUT TEMPLE",description:"Learn about the divine operating system",action:()=>Y()}];e.forEach((l,p)=>{const c=document.createElement("div");c.className="temple-menu-item",c.innerHTML=`
            <span class="menu-number">[${p+1}]</span>
            <span class="menu-title">${l.title}</span>
            <span class="menu-description">${l.description}</span>
        `,c.addEventListener("click",l.action),c.addEventListener("mouseenter",()=>{c.classList.add("highlighted")}),c.addEventListener("mouseleave",()=>{c.classList.remove("highlighted")}),s.appendChild(c)});const o=document.createElement("div");o.className="temple-footer",o.innerHTML=`
        <div>Press [1-6] or click to select • ESC to exit</div>
        <div class="temple-blessing">*** GOD'S THIRD TEMPLE ***</div>
    `,r.appendChild(o);const u=l=>{const p=l.key;if(p>="1"&&p<="6"){const c=parseInt(p)-1;e[c]&&e[c].action()}else p==="Escape"&&console.log("Exiting menu...")};F.addEventListener(document,"keydown",u)}const S=Object.freeze(Object.defineProperty({__proto__:null,createMenu:I},Symbol.toStringTag,{value:"Module"}));I();
