'use client';
import { useState } from 'react';
const projects = [
 { name:'Casa Pátio', type:'Residencial', place:'Vale do Aço / estudo', detail:'Um pátio coberto costura cozinha, sala e jardim. A luz entra pelo centro, não pelas bordas.', tone:'terracota', note:'ALVENARIA / LUZ FILTRADA' },
 { name:'Sala de Chá', type:'Comercial', place:'Minas Gerais / estudo', detail:'Bancos contínuos e nichos de madeira desenham uma pausa no ritmo da rua.', tone:'oliva', note:'MADEIRA / ESCALA HUMANA' },
 { name:'Pavilhão Arco', type:'Cultural', place:'Minas Gerais / estudo', detail:'Arcos alinhados emolduram pequenos encontros e abrem um eixo de ventilação.', tone:'areia', note:'CONCRETO / RITMO' },
] as const;

export default function Page(){
 const [index,setIndex]=useState(0);
 const p=projects[index];
 return <><header><a href="#" className="wordmark">trama<span>OFICINA</span></a><a href="#obras">Caderno de estudos</a></header><main>
 <section className="intro"><div><p className="eyebrow">ARQUITETURA &amp; INTERIORES / PROJETO CONCEITUAL</p><h1>Entre o gesto<br/>e a <em>matéria.</em></h1></div><p>Uma oficina imaginária onde luz, textura e escala orientam cada decisão de projeto.</p></section>
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
 <div className="description"><div><p className="eyebrow">{p.type} / {p.place}</p><h3>{p.name}</h3></div><p>{p.detail}</p></div></article></section></main>
 <footer><strong>trama oficina.</strong><span>Estudos fictícios. Imagens ilustrativas autorais.</span></footer></>;
}
