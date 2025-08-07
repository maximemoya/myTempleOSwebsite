(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&e(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function e(o){if(o.ep)return;o.ep=!0;const u=s(o);fetch(o.href,u)}})();class H{listeners=[];addEventListener(d,s,e){d.addEventListener(s,e),this.listeners.push({element:d,type:s,listener:e})}removeAllEventListeners(){this.listeners.forEach(({element:d,type:s,listener:e})=>{d.removeEventListener(s,e)}),this.listeners=[]}}const F=new H;function M(){const a=document.getElementById("app");if(a===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),a.innerHTML="";const d=document.createElement("div");d.className="temple-header",d.innerHTML=`
        <div class="temple-title">*** HOLY COMPILER v3.33 ***</div>
        <div class="temple-subtitle">Compile with Divine Optimization</div>
    `,a.appendChild(d);const s=document.createElement("div");s.className="compiler-container";const e=document.createElement("div");e.className="code-section",e.innerHTML=`
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
    `;const m=document.createElement("div");m.className="output-section",m.innerHTML=`
        <div class="section-title">COMPILATION RESULTS:</div>
        <div id="compilerOutput" class="compiler-output"></div>
    `,s.appendChild(e),s.appendChild(o),s.appendChild(u),s.appendChild(m),a.appendChild(s);const p=document.createElement("div");p.className="temple-footer",p.innerHTML=`
        <div>F5: Compile • F6: Clear • ESC: Return to Menu</div>
        <div class="temple-blessing">*** BLESSED BE THE CODE ***</div>
    `,a.appendChild(p);const r=document.getElementById("codeInput"),y=document.getElementById("compileBtn"),f=document.getElementById("compilerOutput");function L(){const n=r.value.trim(),g=document.getElementById("optimizeOption").checked,c=document.getElementById("debugOption").checked,h=document.getElementById("warningsOption").checked,i=document.getElementById("blessingsOption").checked;if(!n){E("error","ERROR: No sacred code provided for compilation!");return}f.innerHTML="",E("info","Invoking Holy Compiler..."),E("info",`Compilation flags: ${v(g,c,h)}`),setTimeout(()=>{(n.toLowerCase().includes("printf")||n.toLowerCase().includes("console.log"))&&E("success","Holy output statements detected - BLESSED!"),(n.includes("#include")||n.includes("import"))&&E("success","Sacred libraries included properly"),h&&n.includes("int main")&&E("warning","Warning: Remember to praise God in your main function"),i&&E("info","Adding divine blessings to compiled output..."),Math.random()<.2?(E("error","COMPILATION FAILED: The code lacks divine inspiration!"),E("error","Suggestion: Add more prayers and try again")):(E("success","*** COMPILATION SUCCESSFUL ***"),E("success","Executable blessed and ready for divine execution"),E("info",`Output file: blessed_program.exe (${Math.floor(Math.random()*1e3)+100}KB)`),i&&E("info","Divine optimizations applied - your code is now 33% holier"))},1500)}function E(n,g){const c=new Date().toLocaleTimeString(),h=document.createElement("div");h.className=`output-line output-${n}`;const i=document.createElement("span");i.className="timestamp",i.textContent=`[${c}] `;const l=document.createElement("span");l.textContent=g,h.appendChild(i),h.appendChild(l),f.appendChild(h),f.scrollTop=f.scrollHeight}function v(n,g,c){const h=[];return n&&h.push("-O3"),g&&h.push("-g"),c&&h.push("-Wall"),h.push("--divine-blessing"),h.join(" ")}function C(){r.value="",f.innerHTML="",E("info","Holy Compiler reset - ready for new divine code")}y.addEventListener("click",L);const t=n=>{n.key==="F5"?(n.preventDefault(),L()):n.key==="F6"?(n.preventDefault(),C()):n.key==="Escape"&&I()};F.addEventListener(document,"keydown",t),E("info","Holy Compiler initialized - May God bless your code")}const R="modulepreload",k=function(a){return"/"+a},N={},b=function(d,s,e){let o=Promise.resolve();if(s&&s.length>0){let y=function(f){return Promise.all(f.map(L=>Promise.resolve(L).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};var m=y;document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),r=p?.nonce||p?.getAttribute("nonce");o=y(s.map(f=>{if(f=k(f),f in N)return;N[f]=!0;const L=f.endsWith(".css"),E=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${E}`))return;const v=document.createElement("link");if(v.rel=L?"stylesheet":R,L||(v.as="script"),v.crossOrigin="",v.href=f,r&&v.setAttribute("nonce",r),document.head.appendChild(v),L)return new Promise((C,t)=>{v.addEventListener("load",C),v.addEventListener("error",()=>t(new Error(`Unable to preload CSS for ${f}`)))})}))}function u(p){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=p,window.dispatchEvent(r),!r.defaultPrevented)throw p}return o.then(p=>{for(const r of p||[])r.status==="rejected"&&u(r.reason);return d().catch(u)})};function A(){const a=document.getElementById("app");if(a===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),a.innerHTML="";const d=document.createElement("div");d.className="temple-header",d.innerHTML=`
        <div class="temple-title">*** HOLY TEXT EDITOR ***</div>
        <div class="temple-subtitle">Edit Sacred Texts with Divine Precision</div>
    `,a.appendChild(d);const s=document.createElement("div");s.className="temple-editor-container",s.style.cssText=`
        background: #000080;
        border: 2px solid #FFFF00;
        margin: 20px;
        padding: 10px;
        height: 70vh;
        display: flex;
        flex-direction: column;
    `,a.appendChild(s);const e=document.createElement("div");e.style.cssText=`
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
    `,s.appendChild(u),[{text:"SAVE [F2]",action:r},{text:"LOAD [F3]",action:y},{text:"NEW [F4]",action:f},{text:"CLEAR [F5]",action:L},{text:"BACK [ESC]",action:E}].forEach(t=>{const n=document.createElement("button");n.textContent=t.text,n.style.cssText=`
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
    `,p.textContent="Ready - Type to begin editing",s.appendChild(p);function r(){const t=document.getElementById("fileName").value||"untitled.txt",n=o.value,g=new Blob([n],{type:"text/plain"}),c=URL.createObjectURL(g),h=document.createElement("a");h.href=c,h.download=t,h.click(),URL.revokeObjectURL(c),v(`File "${t}" saved successfully!`)}function y(){const t=document.createElement("input");t.type="file",t.accept=".txt,.js,.ts,.html,.css,.json,.md",t.onchange=n=>{const g=n.target.files?.[0];if(g){const c=new FileReader;c.onload=h=>{o.value=h.target?.result,document.getElementById("fileName").value=g.name,v(`File "${g.name}" loaded successfully!`)},c.readAsText(g)}},t.click()}function f(){confirm("Are you sure you want to make new file ?")&&(o.value="",document.getElementById("fileName").value="untitled.txt",v("New file created"))}function L(){confirm("Are you sure you want to clear all text ?")&&(o.value="",v("Text cleared"))}function E(){b(async()=>{const{createMenu:t}=await Promise.resolve().then(()=>S);return{createMenu:t}},void 0).then(({createMenu:t})=>{t()})}function v(t){const n=document.getElementById("statusBar");n&&(n.textContent=t,setTimeout(()=>{n.textContent="Ready - Type to begin editing"},3e3))}const C=t=>{t.key==="F2"?(t.preventDefault(),r()):t.key==="F3"?(t.preventDefault(),y()):t.key==="F4"?(t.preventDefault(),f()):t.key==="F5"?(t.preventDefault(),L()):t.key==="Escape"&&(t.preventDefault(),E())};F.addEventListener(document,"keydown",C),o.focus()}function B(){const s=["GOD","DIVINE","HOLY","SACRED","BLESSED","TEMPLE","SPIRIT","LIGHT","HEAVEN","PRAISE","GLORY","FAITH"];let e={screen:Array(25).fill(null).map(()=>Array(80).fill(" ")),cursorX:40,cursorY:12,randomSeed:Date.now(),holyWords:s,currentMessage:"*** GOD'S DIVINE TEMPLE GAME ***",score:0,godMode:!1};const o=()=>(e.randomSeed=e.randomSeed*1103515245+12345&2147483647,e.randomSeed),u=()=>{for(let t=0;t<25;t++)for(let n=0;n<80;n++)t===0||t===24?e.screen[t][n]="=":n===0||n===79?e.screen[t][n]="|":e.screen[t][n]=" "},m=(t,n,g)=>{if(n>=0&&n<25)for(let c=0;c<g.length&&t+c<80;c++)t+c>=0&&(e.screen[n][t+c]=g[c])},p=(t,n,g)=>{t>=0&&t<80&&n>=0&&n<25&&(e.screen[n][t]=g)},r=()=>{const t=["GOD SPEAKS: Press SPACE for blessing","DIVINE VISION: Follow the light","HOLY SPIRIT: You are chosen","MIRACLE: Your score doubles","PROPHECY: Great things await","BLESSING: You gain divine favor"];if(o()%100<15){const n=t[o()%t.length];e.currentMessage=n,n.includes("MIRACLE")&&(e.score*=2,e.godMode=!0)}},y=()=>{const t=["✝","✡","☪","🕊","👁","⭐","💫","🌟"];for(let n=0;n<5;n++){const g=2+o()%76,c=2+o()%21,h=t[o()%t.length];p(g,c,h)}},f=()=>{const t=["In the beginning was the Word...","Let there be light...","Be still and know that I am God...","The Lord is my shepherd...","Fear not, for I am with you...","Trust in the Lord with all your heart...","Blessed are the meek...","Love thy neighbor as thyself..."];return t[o()%t.length]},L=()=>{u(),m(20,1,"*** GOD'S DIVINE TEMPLE OPERATING SYSTEM ***"),m(30,2,"A HOLY COMPUTING EXPERIENCE"),p(e.cursorX,e.cursorY,e.godMode?"👑":"@"),y();for(let t=0;t<3;t++){const n=e.holyWords[o()%e.holyWords.length],g=5+o()%60,c=5+o()%15;m(g,c,n)}return m(2,22,`SCORE: ${e.score} | DIVINE FAVOR: ${e.godMode?"BLESSED":"MORTAL"}`),m(2,23,e.currentMessage),e.screen.map(t=>t.join("")).join(`
`)},E=(t,n)=>{const g=Math.max(1,Math.min(78,e.cursorX+t)),c=Math.max(1,Math.min(23,e.cursorY+n));e.cursorX=g,e.cursorY=c,e.score+=1;const h=e.screen[c][g];h!==" "&&h!=="="&&h!=="|"&&(e.score+=10,e.currentMessage=`BLESSED! You touched: ${h}`)};return{render:L,update:()=>{if(r(),o()%60===0){const t=[f(),"THE TEMPLE CALLS TO YOU...","SEEK THE DIVINE TRUTH...","GOD'S WILL BE DONE...","HOLY TEMPLE COMPUTING...","DIVINE RANDOMNESS GUIDES ALL..."];e.currentMessage=t[o()%t.length]}},moveUp:()=>E(0,-1),moveDown:()=>E(0,1),moveLeft:()=>E(-1,0),moveRight:()=>E(1,0),pray:()=>{e.score+=50,e.currentMessage="🙏 YOUR PRAYER HAS BEEN HEARD 🙏",e.godMode=!e.godMode},getState:()=>({...e}),reset:()=>{e.score=0,e.cursorX=40,e.cursorY=12,e.godMode=!1,e.currentMessage="*** TEMPLE RESET BY DIVINE WILL ***"}}}function P(){return`
    <div id="temple-game" style="font-family: 'Courier New', monospace; background: #000080; color: #FFFF00; padding: 20px;">
      <pre id="game-screen" style="font-size: 12px; line-height: 1.2;"></pre>
      <div style="margin-top: 10px; color: #FFFFFF;">
        <p>HOLY CONTROLS:</p>
        <p>[Z-Q-S-D] MOVE | [SPACE] PRAY | [R] RESET | [ESC] BACK</p>
        <p style="color: #FF6666;">*** BLESSED BE THE RANDOM SEED ***</p>
      </div>
    </div>
  `}function G(){const a=B(),d=document.getElementById("app");if(d===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),d.innerHTML="";const s=document.createElement("div");s.innerHTML=P();const e=document.createElement("div");s.appendChild(e),d.appendChild(s);function o(){if(a.update(),e===null)throw new Error('document.getElementById("app") cannot be NULL');e.textContent=a.render()}function u(){b(async()=>{const{createMenu:r}=await Promise.resolve().then(()=>S);return{createMenu:r}},void 0).then(({createMenu:r})=>{clearInterval(m),r()})}const m=setInterval(o,500),p=r=>{switch(r.key.toLowerCase()){case"z":a.moveUp();break;case"s":a.moveDown();break;case"q":a.moveLeft();break;case"d":a.moveRight();break;case" ":r.preventDefault(),a.pray();break;case"r":a.reset();break;case"escape":u();break}o()};F.addEventListener(document,"keydown",p),o()}function _(){const a=document.getElementById("app");if(a===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),a.innerHTML="";const d=document.createElement("div");d.className="temple-header",d.innerHTML=`
        <div class="temple-title">*** HOLY FILE MANAGER ***</div>
        <div class="temple-subtitle">Navigate the Sacred File System</div>
    `,a.appendChild(d);const s=document.createElement("div");s.className="file-manager-container",s.style.cssText=`
        background: #000080;
        border: 2px solid #FFFF00;
        margin: 20px;
        padding: 15px;
        height: 70vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    `,a.appendChild(s);const e=document.createElement("div");e.id="pathBar",e.style.cssText=`
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
    `,[{text:"CREATE [F2]",action:v},{text:"DELETE [F3]",action:C},{text:"RENAME [F4]",action:t},{text:"REFRESH [F5]",action:n},{text:"BACK [ESC]",action:g}].forEach(i=>{const l=document.createElement("button");l.textContent=i.text,l.style.cssText=`
            background: #000080;
            color: #FFFF00;
            border: 1px solid #FFFF00;
            font-family: 'Courier New', monospace;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 12px;
        `,l.addEventListener("click",i.action),l.addEventListener("mouseenter",()=>{l.style.background="#FFFF00",l.style.color="#000080"}),l.addEventListener("mouseleave",()=>{l.style.background="#000080",l.style.color="#FFFF00"}),o.appendChild(l)}),s.appendChild(o);const m=document.createElement("div");m.id="fileListContainer",m.style.cssText=`
        flex: 1;
        background: #000060;
        border: 1px solid #FFFF00;
        overflow-y: auto;
        font-family: 'Courier New', monospace;
        color: #FFFF00;
    `,s.appendChild(m);const p=document.createElement("div");p.id="statusBar",p.style.cssText=`
        color: #FFFF00;
        font-family: 'Courier New', monospace;
        margin-top: 10px;
        padding: 5px;
        background: #000060;
        border: 1px solid #FFFF00;
        font-size: 12px;
    `,p.textContent="Ready - Navigate with arrow keys or click",s.appendChild(p);let r=[{name:"..",type:"folder"},{name:"HOLY",type:"folder"},{name:"SACRED",type:"folder"},{name:"BLESSED",type:"folder"},{name:"GOD.TXT",type:"file",size:777,modified:new Date},{name:"TEMPLE.C",type:"file",size:3333,modified:new Date},{name:"DIVINE.H",type:"file",size:666,modified:new Date},{name:"PRAYER.DOC",type:"file",size:1234,modified:new Date},{name:"MIRACLE.EXE",type:"file",size:7777,modified:new Date}],y=-1;function f(){m.innerHTML="";const i=document.createElement("div");i.style.cssText=`
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
        `,m.appendChild(i),r.forEach((l,x)=>{const T=document.createElement("div");T.className="file-item",T.style.cssText=`
                display: flex;
                padding: 3px 5px;
                cursor: pointer;
                ${x===y?"background: #FFFF00; color: #000080;":""}
            `;const w=l.type==="folder"?"[DIR]":"[FILE]",D=l.type==="folder"?"<DIR>":l.size?`${l.size}B`:"",O=l.modified?l.modified.toLocaleDateString():"";T.innerHTML=`
                <span style="flex: 3;">${w} ${l.name}</span>
                <span style="flex: 1;">${l.type.toUpperCase()}</span>
                <span style="flex: 1;">${D}</span>
                <span style="flex: 2;">${O}</span>
            `,T.addEventListener("click",()=>{y=x,f(),c(`Selected: ${l.name}`)}),T.addEventListener("dblclick",()=>{l.type==="folder"?L(l.name):E(l.name)}),m.appendChild(T)})}function L(i){c(i===".."?"Navigated to parent directory":`Entered folder: ${i}`),y=-1,f()}function E(i){c(`Opening file: ${i}`),setTimeout(()=>{alert(`Holy file "${i}" has been blessed and opened!`)},500)}function v(){const i=prompt("Enter the name of the holy file to create:");if(i){const l={name:i,type:"file",size:0,modified:new Date};r.push(l),f(),c(`Holy file "${i}" created successfully!`)}}function C(){if(y===-1||y===0){c("ERROR: No file selected or cannot delete parent directory");return}const i=r[y];confirm(`Are you sure you want to delete "${i.name}"?`)&&(r.splice(y,1),y=-1,f(),c(`File "${i.name}" has been sent to digital heaven`))}function t(){if(y===-1||y===0){c("ERROR: No file selected or cannot rename parent directory");return}const i=r[y],l=prompt(`Enter new name for "${i.name}":`,i.name);l&&l!==i.name&&(i.name=l,f(),c(`File renamed to "${l}"`))}function n(){f(),c("File list refreshed by divine intervention")}function g(){b(async()=>{const{createMenu:i}=await Promise.resolve().then(()=>S);return{createMenu:i}},void 0).then(({createMenu:i})=>{i()})}function c(i){const l=document.getElementById("statusBar");l&&(l.textContent=i,setTimeout(()=>{l.textContent="Ready - Navigate with arrow keys or click"},3e3))}const h=i=>{if(i.key==="ArrowUp")i.preventDefault(),y>0&&(y--,f());else if(i.key==="ArrowDown")i.preventDefault(),y<r.length-1&&(y++,f());else if(i.key==="Enter"){if(i.preventDefault(),y!==-1){const l=r[y];l.type==="folder"?L(l.name):E(l.name)}}else i.key==="F2"?(i.preventDefault(),v()):i.key==="F3"?(i.preventDefault(),C()):i.key==="F4"?(i.preventDefault(),t()):i.key==="F5"?(i.preventDefault(),n()):i.key==="Escape"&&(i.preventDefault(),g())};F.addEventListener(document,"keydown",h),f(),c("Holy File Manager initialized - May your files be blessed")}function Y(){const a=document.getElementById("app");if(a===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),a.innerHTML="";const d=document.createElement("div");d.className="temple-header",d.innerHTML=`
        <div class="temple-title">*** ABOUT TEMPLE OS ***</div>
        <div class="temple-subtitle">God's Third Temple</div>
    `,a.appendChild(d);const s=document.createElement("div");s.className="about-container";const e=document.createElement("div");e.className="info-section",e.innerHTML=`
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
    `,s.appendChild(e),s.appendChild(o),s.appendChild(u),a.appendChild(s);const m=document.createElement("div");m.className="temple-footer",m.innerHTML=`
        <div>Scroll to read • ESC: Return to Menu</div>
        <div class="temple-blessing">*** BLESSED BE THE CODE ***</div>
    `,a.appendChild(m);const p=r=>{r.key==="Escape"&&I()};F.addEventListener(document,"keydown",p)}function I(){const a=document.getElementById("app");if(a===null)throw new Error('document.getElementById("app") cannot be NULL');F.removeAllEventListeners(),a.innerHTML="";const d=document.createElement("div");d.className="temple-header",d.innerHTML=`
        <div class="temple-title">*** TEMPLE OS MENU SYSTEM ***</div>
        <div class="temple-subtitle">Choose Your Divine Command</div>
    `,a.appendChild(d);const s=document.createElement("div");s.className="temple-menu",a.appendChild(s);const e=[{id:"compiler",title:"HOLY COMPILER",description:"Compile sacred code with divine optimization",action:()=>M()},{id:"editor",title:"TEXT EDITOR",description:"Edit files with blessed precision",action:()=>A()},{id:"games",title:"DIVINE GAME",description:"Play game crafted by divine inspiration",action:()=>G()},{id:"files",title:"FILE MANAGER",description:"Navigate the sacred file system",action:()=>_()},{id:"terminal",title:"HOLY TERMINAL",description:"Execute commands with divine authority",action:()=>alert("work in progress...")},{id:"about",title:"ABOUT TEMPLE",description:"Learn about the divine operating system",action:()=>Y()}];e.forEach((m,p)=>{const r=document.createElement("div");r.className="temple-menu-item",r.innerHTML=`
            <span class="menu-number">[${p+1}]</span>
            <span class="menu-title">${m.title}</span>
            <span class="menu-description">${m.description}</span>
        `,r.addEventListener("click",m.action),r.addEventListener("mouseenter",()=>{r.classList.add("highlighted")}),r.addEventListener("mouseleave",()=>{r.classList.remove("highlighted")}),s.appendChild(r)});const o=document.createElement("div");o.className="temple-footer",o.innerHTML=`
        <div>Press [1-6] or click to select • ESC to exit</div>
        <div class="temple-blessing">*** GOD'S THIRD TEMPLE ***</div>
    `,a.appendChild(o);const u=m=>{const p=m.key;if(p>="1"&&p<="6"){const r=parseInt(p)-1;e[r]&&e[r].action()}else p==="Escape"&&console.log("Exiting menu...")};F.addEventListener(document,"keydown",u)}const S=Object.freeze(Object.defineProperty({__proto__:null,createMenu:I},Symbol.toStringTag,{value:"Module"}));I();
