'use client';
import { useState } from 'react';
const asset = (file: string) => (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/" + file;
const projects = [
 { name:'Casa Pátio', type:'Residencial', place:'Vale do Aço / estudo', detail:'Um pátio coberto costura cozinha, sala e jardim. A luz entra pelo centro, não pelas bordas.', tone:'terracota', note:'ALVENARIA / LUZ FILTRADA' },
 { name:'Sala de Chá', type:'Comercial', place:'Minas Gerais / estudo', detail:'Bancos contínuos e nichos de madeira desenham uma pausa no ritmo da rua.', tone:'oliva', note:'MADEIRA / ESCALA HUMANA' },
 { name:'Pavilhão Arco', type:'Cultural', place:'Minas Gerais / estudo', detail:'Arcos alinhados emolduram pequenos encontros e abrem um eixo de ventilação.', tone:'areia', note:'CONCRETO / RITMO' },
] as const;

const studioProcess = [
 { title:"Escuta", detail:"Levantamento das rotinas, da luz e do que pode permanecer no espaço.", motif:"M5 25V5h31v20H22l-8 7v-7H5Zm7-12h17m-17 6h11" },
 { title:"Cidade", detail:"Verificação das relações com a rua, das chegadas e da vida que passa do lado de fora.", motif:"M5 35h33M8 32V14h10v18m5 0V7h12v25M11 20h4m11-8h6m-6 6h6m-6 6h6" },
 { title:"Matéria", detail:"Estudos de encontro entre superfícies, desenho da sombra e manutenção no uso diário.", motif:"M4 16 21 6l18 10-18 10L4 16Zm0 7 17 10 18-10M4 30l17 10 18-10"},
];
export default function Page(){
 const [index,setIndex]=useState(0);
 const p=projects[index];
 return <><header><a href="#" className="wordmark">trama<span>OFICINA</span></a><a href="#obras">Caderno de estudos</a></header><main>
 <section className="intro"><div><p className="eyebrow">ARQUITETURA &amp; INTERIORES / PROJETO CONCEITUAL</p><h1>Entre o gesto<br/>e a <em>matéria.</em></h1></div><p>Uma oficina imaginária onde luz, textura e escala orientam cada decisão de projeto.</p></section>
 <figure className="editorial-photo"><img src={asset("trama-hero.webp")} alt="Escada central de madeira em um interior branco iluminado por uma claraboia" width="1600" height="1067" fetchPriority="high"/><figcaption><span>ESTUDO DE REFERÊNCIA</span><span>LUZ ZENITAL / CIRCULAÇÃO</span></figcaption></figure>
 <section id="obras" className="work" aria-labelledby="study"><div className="toolbar"><h2 id="study">Caderno de estudos</h2><div className="options" role="group" aria-label="Escolha de estudo">{projects.map((x,i)=><button key={x.name} aria-pressed={i===index} onClick={()=>setIndex(i)}>{x.name}</button>)}</div></div>
 <article aria-live="polite">
 <figure className={p.tone} key={p.name}>
 <svg viewBox="0 0 1100 530" preserveAspectRatio="xMidYMid slice" role="img" aria-label={'Ilustração em perspectiva: '+p.name}>
 <defs><linearGradient id="wall" x2=".8" y2="1"><stop stopColor="var(--light)"/><stop offset="1" stopColor="var(--shade)"/></linearGradient><pattern id="floor" width="86" height="35" patternUnits="userSpaceOnUse"><path d="M0 0H86V35" fill="none" stroke="var(--line)" opacity=".36"/></pattern></defs>
 <rect width="1100" height="530" fill="var(--light)"/>
 <path d="M0 0H1100L730 94H392Z" fill="var(--ceiling)"/><path d="M0 530H1100L730 339H392Z" fill="var(--floor)"/><path d="M0 530H1100L730 339H392Z" fill="url(#floor)"/><path d="M0 0V530L392 339V94Z" fill="url(#wall)"/><path d="M1100 0V530L730 339V94Z" fill="var(--shade)"/><path d="M392 94H730V339H392Z" fill="var(--wall)"/>
 {index===0?<><path d="M439 339V210a80 80 0 0 1 160 0v129Z" fill="var(--sky)"/><path d="M599 339V210a45 45 0 0 1 90 0v129Z" fill="var(--shade)"/><path d="M439 339H599L810 530H395Z" fill="var(--ceiling)" opacity=".75"/></>:index===1?<><path d="M416 136H711V264H416Z" fill="var(--shade)"/><path d="M430 154H695V248H430Z" fill="var(--sky)"/><path d="M419 282H710L754 342H392Z" fill="var(--ceiling)"/><path d="M468 160V244M528 160V244M588 160V244M648 160V244" stroke="var(--wall)" strokeWidth="6"/></>:<><path d="M443 339V214a118 118 0 0 1 236 0v125Z" fill="var(--shade)"/><path d="M467 339V218a94 94 0 0 1 188 0v121Z" fill="var(--wall)"/><path d="M491 339V224a70 70 0 0 1 140 0v115Z" fill="var(--sky)"/><path d="M515 339H622L757 530H777Z" fill="var(--ceiling)" opacity=".85"/></>}
 <path d="M110 530l282-191M960 530L730 339M589 530l-36-191" stroke="var(--line)" opacity=".35" fill="none"/>
 </svg><figcaption>{p.note}</figcaption></figure>
 <div className="description"><div><p className="eyebrow">{p.type} / {p.place}</p><h3>{p.name}</h3></div><p>{p.detail}</p></div></article></section>
 <section className="method" aria-labelledby="method-title"><div><p className="eyebrow">MÉTODO DE PROJETO</p><h2 id="method-title">Um modo de olhar.</h2><p>Três perguntas antes do primeiro desenho: quem ocupa, como chega e o que fica.</p></div><div className="method-list">{studioProcess.map(step=><article key={step.title}><svg viewBox="0 0 44 44" width="44" height="44" aria-hidden="true"><path d={step.motif} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><div><h3>{step.title}</h3><p>{step.detail}</p></div></article>)}</div></section>
 <section className="materials" aria-labelledby="materials-title"><div><p className="eyebrow">ATLAS / REFERÊNCIAS REAIS</p><h2 id="materials-title">Dois jeitos de desenhar a luz.</h2></div><figure><img src={asset("trama-arch.webp")} alt="Luz lateral atravessa um interior de concreto com uma parede curva" width="1050" height="1400" loading="lazy"/><figcaption><strong>Concreto contínuo.</strong> Curvatura e luz lateral suavizam as transições.</figcaption></figure><figure><img src={asset("trama-wood.webp")} alt="Sala vazia de piso amadeirado com escada e superfícies claras" width="1150" height="767" loading="lazy"/><figcaption><strong>Plano horizontal.</strong> Piso e paredes claras distribuem a luz recebida.</figcaption></figure></section>
 <aside className="brief"><p className="eyebrow">DENTRO DO CADERNO</p><blockquote>“Antes de abrir uma janela, vale saber o que a gente quer trazer para dentro.”</blockquote><p>Nota editorial da oficina fictícia.</p></aside></main>
 <footer><strong>trama oficina.</strong><span>Estudos fictícios e fotografias de referência.</span><details className="credits"><summary>Créditos fotográficos</summary><p><a href="https://www.pexels.com/photo/modern-building-interior-8243097/">Ana Benet</a> · <a href="https://www.pexels.com/photo/abstract-concrete-architectural-interior-36248806/">Yulia Shapereva s</a> · <a href="https://www.pexels.com/photo/a-large-empty-room-with-hardwood-floors-and-stairs-18559617/">Stephen Leonardi</a> · <a href="https://www.pexels.com/license/">Pexels</a></p></details></footer></>;
}
