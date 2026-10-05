import { useState, useEffect } from "react";
import { IM, C, P, T, BEN } from "./data";
import OwnerPage from './OwnerPage';
import softImg from './assets/softener.jpg'
import logo from './assets/logo.png'
import posterImg from './assets/distributor-poster.jpg'

const SOFT = {
    en: {
        badge: 'WATER SOFTENER',
        title: 'Manthan Jal Water Electrolysis Water Softener',
        desc: 'Hard water leaves white scale on taps, pipes, geysers and machines, and makes soap and detergent work harder. The Manthan Jal Water Electrolysis Water Softener is a stainless steel plant built to treat hard water at the source, so that the water reaching your building is gentler on your plumbing and your daily use. Designed and made in India for homes, apartments, hotels, hospitals, factories and commercial buildings, with a digital control panel for easy monitoring.',
        cards: [
            ['01 — Better Water & Mineral Management', 'Electrolyzed water technology helps manage hard-water scaling while retaining naturally occurring minerals such as calcium and magnesium, without the routine addition of salt or chemicals.'],
            ['02 — Supports Better Digestion', 'Alkaline / functional water can support the rumen environment and hydration, helping maintain efficient digestion and nutrient utilization in dairy animals.'],
            ['03 — Supports Milk Quality & Production', 'Proper hydration and efficient feed digestion are important for dairy performance. Functional water may support maintaining milk yield and milk composition when used as part of good overall animal management.'],
            ['04 — Helps Maintain Udder & Milk Hygiene', 'Electrolyzed water technology can be used in hygiene and cleaning applications around dairy operations. Maintaining clean equipment and surroundings helps support better udder hygiene and milk quality.'],
            ['05 — Supports Gut & Microbial Balance', 'Hydrogen-rich electrolyzed water is being studied for its effects on oxidative balance and the gut environment. It may support a favorable environment for beneficial microbial activity.'],
            ['06 — Chemical-Free & Zero-Water-Wastage Solution', 'Designed to treat water through electrolysis without conventional salt regeneration, helping reduce chemical use and wastewater generation while providing an efficient water-conditioning solution.'],
        ],
        chips: ['Apartments', 'Hotels', 'Hospitals', 'Factories', 'Offices', 'Commercial buildings'],
        quote: 'Get a quote',
    },
    hi: {
        badge: 'वाटर सॉफ्टनर',
        title: 'मंथन जल वाटर इलेक्ट्रोलिसिस वाटर सॉफ्टनर',
        desc: 'कठोर पानी नल, पाइप, गीज़र और मशीनों पर सफ़ेद परत (स्केल) छोड़ता है और साबुन-डिटर्जेंट ज़्यादा लगवाता है। मंथन जल वाटर इलेक्ट्रोलिसिस वाटर सॉफ्टनर एक स्टेनलेस स्टील प्लांट है, जो कठोर पानी को स्रोत पर ही ट्रीट करता है, ताकि आपकी बिल्डिंग तक पहुँचने वाला पानी आपकी प्लंबिंग और रोज़मर्रा के उपयोग के लिए बेहतर रहे। घर, अपार्टमेंट, होटल, अस्पताल, फैक्ट्री और कमर्शियल बिल्डिंग के लिए भारत में डिज़ाइन और निर्मित, आसान निगरानी के लिए डिजिटल कंट्रोल पैनल के साथ।',
        cards: [
            ['01 — बेहतर पानी और मिनरल प्रबंधन', 'इलेक्ट्रोलाइज़्ड वाटर तकनीक कठोर पानी की स्केलिंग को नियंत्रित करने में मदद करती है, और कैल्शियम व मैग्नीशियम जैसे प्राकृतिक मिनरल बनाए रखती है, बिना नमक या रसायनों के नियमित उपयोग के।'],
            ['02 — बेहतर पाचन में सहायक', 'अल्कलाइन / फंक्शनल वाटर रूमेन के वातावरण और हाइड्रेशन को सपोर्ट कर सकता है, जिससे डेयरी पशुओं में कुशल पाचन और पोषक तत्वों का उपयोग बना रहता है।'],
            ['03 — दूध की गुणवत्ता और उत्पादन में सहायक', 'सही हाइड्रेशन और कुशल चारा पाचन डेयरी प्रदर्शन के लिए ज़रूरी हैं। अच्छे पशु प्रबंधन के साथ उपयोग करने पर फंक्शनल वाटर दूध की मात्रा और संरचना बनाए रखने में सहायक हो सकता है।'],
            ['04 — थन और दूध की स्वच्छता बनाए रखने में सहायक', 'इलेक्ट्रोलाइज़्ड वाटर तकनीक का उपयोग डेयरी में स्वच्छता और सफ़ाई के कामों में किया जा सकता है। साफ़ उपकरण और परिवेश थन की स्वच्छता और दूध की गुणवत्ता में मदद करते हैं।'],
            ['05 — आंत और माइक्रोबियल संतुलन में सहायक', 'हाइड्रोजन-रिच इलेक्ट्रोलाइज़्ड वाटर पर ऑक्सीडेटिव संतुलन और आंत के वातावरण पर प्रभाव के लिए अध्ययन हो रहे हैं। यह लाभकारी सूक्ष्मजीवों की गतिविधि के लिए अनुकूल वातावरण में सहायक हो सकता है।'],
            ['06 — केमिकल-फ्री और शून्य जल-बर्बादी समाधान', 'पारंपरिक नमक रीजनरेशन के बिना इलेक्ट्रोलिसिस से पानी ट्रीट करने के लिए डिज़ाइन किया गया, जो रसायनों के उपयोग और अपशिष्ट जल को कम करने में मदद करता है।'],
        ],
        chips: ['अपार्टमेंट', 'होटल', 'अस्पताल', 'फैक्ट्री', 'ऑफिस', 'कमर्शियल बिल्डिंग'],
        quote: 'कोटेशन पाएँ',
    },
}
const LINKS = [
    { label: 'Water for Dairy Cattle — NMSU Extension', url: 'https://pubs.nmsu.edu/_d/D107/index.html' },
    { label: 'Low Ruminal pH Reduces Dietary Fiber Digestion', url: 'https://koreascience.kr/article/JAKO200710103443899.pdf' },
    { label: 'Drinking Behavior & Water Intake in Dairy Cows', url: 'https://hal.inrae.fr/hal-02662599' },
    { label: 'Electrolyzed Water: A Review — PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/33435548/' },
    { label: 'Hydrogen-Rich Water & Gut Microbiota', url: 'https://pubmed.ncbi.nlm.nih.gov/34213495/' },
    { label: 'Electrolyzed–Reduced Water: Review I', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9738607/' },
]

function Softener({ L = 'en', onQuote, onWa }) {
    const s = SOFT[L]
    return (
        <section id="softener" className="py-16">
            <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img src={softImg} alt="Manthan Jal Water Electrolysis Water Softener" loading="lazy" className="w-full max-h-[640px] object-cover" />
                </div>
                <div>
                    <span className="badge mb-3">{s.badge}</span>
                    <h2 className="font-serif text-3xl md:text-4xl mb-3">{s.title}</h2>
                    <p className="opacity-80 mb-5">{s.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {s.cards.map((c, i) => (
                            <div key={c[0]} className="glass p-4 border-l-2 border-l-cyan-500">
                                <h3 className="font-serif font-bold mb-1">{c[0]}</h3>
                                <p className="text-sm opacity-70">{c[1]}</p>
                                <a
                                    href={LINKS[i].url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block mt-2 text-xs font-semibold text-cyan-600 dark:text-cyan-300 hover:underline"
                                >
                                    {L === 'hi' ? 'स्रोत' : 'Source'}: {LINKS[i].label} ↗
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-5">
                        {s.chips.map((x) => (
                            <span key={x} className="chip">{x}</span>
                        ))}
                    </div>
                    <div className="flex gap-2 flex-wrap mt-6">
                        <button className="btn red" onClick={onQuote}>{s.quote}</button>
                        <button className="btn" onClick={onWa}>WhatsApp</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
function Distributor({ L = 'en' }) {
    const hi = L === 'hi'
    const msg = 'Hello, I want to become a Manthan Jal C&F / Distributor. Please share the details.'
    return (
        <section id="distributor" className="py-16">
            <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
                <a
                    href={posterImg}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto md:mx-0"
                    aria-label="Open full poster"
                >
                    <img
                        src={posterImg}
                        alt="Manthan Jal C&F and Distributor invitation"
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </a>
                <div>
                    <span className="badge mb-3">{hi ? 'डिस्ट्रीब्यूटरशिप' : 'DISTRIBUTORSHIP'}</span>
                    <h2 className="font-serif text-3xl md:text-4xl mb-3">
                        {hi ? 'राष्ट्रीय C&F / डिस्ट्रीब्यूटर बनें' : 'Become a National C&F / Distributor'}
                    </h2>
                    <p className="opacity-80 mb-5">
                        {hi
                            ? 'मंथन जल भारत के हर राज्य में C&F और हर जिले में डिस्ट्रीब्यूटर आमंत्रित कर रहा है। जुड़ने के लिए संपर्क करें।'
                            : 'Manthan Jal is inviting C&F partners for every state and distributors for every district in India. Get in touch to join us.'}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        <a className="btn red" href="tel:+917359617935">
                            {hi ? 'कॉल करें' : 'Call'} +91 73596 17935
                        </a>
                        <a
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                            href={'https://wa.me/917359617935?text=' + encodeURIComponent(msg)}
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

const inr = (n) => "₹" + n.toLocaleString("en-IN");
const wa = (x) =>
    window.open(
        "https://wa.me/" + C.wa + "?text=" + encodeURIComponent(x),
        "_blank",
    );
const H2 = ({ children }) => (
    <h2 className="font-serif text-3xl md:text-4xl mb-4">{children}</h2>
);
const Box = ({ h, p, tag }) => (
    <div className="glass p-5 border-l-4 border-l-cyan-500 hover:-translate-y-1 hover:border-l-red-600 transition">
        {tag && <span className="badge mb-2">{tag}</span>}
        <h3 className="font-serif text-lg mb-1">{h}</h3>
        <p className="opacity-70 text-sm">{p}</p>
    </div>
);
    ;
const Img = ({ s, alt, float, cls = "" }) => (
    <div
        className={`rounded-xl bg-gradient-to-br from-sky-100 to-white dark:from-slate-800 dark:to-slate-900 shadow-2xl overflow-hidden group ${cls}`}
        style={float ? { animation: "fl 6s ease-in-out infinite" } : {}}
    >
        <img
            src={s}
            alt={alt}
            loading="lazy"
            className="w-full max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-105"
        />
    </div>
);
function Tilt({ children, className }) {
    const [s, setS] = useState("");
    return (
        <div
            className={className}
            style={{ transform: s, transition: "transform .15s" }}
            onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                setS(
                    `perspective(700px) rotateY(${((e.clientX - r.left) / r.width) * 12 - 6}deg) rotateX(${6 - ((e.clientY - r.top) / r.height) * 12}deg)`,
                );
            }}
            onMouseLeave={() => setS("")}
        >
            {children}
        </div>
    );
}
export default function App() {
    const [L, setL] = useState(localStorage.lang || "en"),
        [dark, setDark] = useState(
            localStorage.th
                ? localStorage.th == "dark"
                : matchMedia("(prefers-color-scheme:dark)").matches,
        );
    const [route, setRoute] = useState(location.hash || "#/"),
        [order, setOrder] = useState(null),
        [menu, setMenu] = useState(false),
        [si, setSi] = useState(0),
        [sc, setSc] = useState(false);
    const t = (k) => T[L][k] ?? T.en[k],
        pr = (p) => (p.price ? t("mrp") + " " + inr(p.price) : t("cfp"));
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.th = dark ? "dark" : "light";
    }, [dark]);
    useEffect(() => {
        localStorage.lang = L;
        document.documentElement.lang = L;
    }, [L]);
    useEffect(() => {
        const f = () => {
            setRoute(location.hash || "#/");
            scrollTo(0, 0);
        },
            g = () => setSc(scrollY > 30);
        addEventListener("hashchange", f);
        addEventListener("scroll", g);
        const i = setInterval(() => {
            const a = document.activeElement;
            const typing = a && ["INPUT", "TEXTAREA", "SELECT"].includes(a.tagName);
            const modal = document.querySelector('[class*="z-[99]"]');
            if (typing || modal || window.scrollY > 500) return;
            setSi((s) => (s + 1) % 3);
        }, 6000); return () => {
            removeEventListener("hashchange", f);
            removeEventListener("scroll", g);
            clearInterval(i);
        };
    }, []);
    const jump = (id) => {
        setMenu(false);
        if (location.hash && location.hash != "#/") location.hash = "#/";
        setTimeout(
            () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
            80,
        );
    };
    const nav = [
        ["home", "top"],
        ["products", "products"],
        ["services", "services"],
        ["benefits", "benefits"],
        ["contact", "contact"],
    ];
    const m = route.match(/^#\/p\/(.+)/),
        prod = m && P.find((p) => p.id == m[1]),
        isAtm = route == "#/atm";
    useEffect(() => {
        document.title = prod
            ? prod.name + " | Manthan Jal"
            : isAtm
                ? "Water ATM | Manthan Jal"
                : "Manthan Jal – Alkaline Water Ionizer, Surat";
    }, [route]);
    const Card = ({ p }) => (
        <Tilt className="glass p-4 hover:ring-1 hover:ring-cyan-400 hover:shadow-2xl">
            <Img
                s={IM[p.img]}
                alt={p.name}
                cls="h-56 grid place-items-center mb-3 [&_img]:h-full [&_img]:p-2"
            />
            <h3 className="font-serif text-lg">{p.name}</h3>
            <p className="opacity-70 text-sm mb-2">{p.short}</p>
            <div className="font-serif font-bold text-red-600 text-lg">{pr(p)}</div>
            <div className="flex gap-2 flex-wrap mt-3">
                <a className="btn" href={"#/p/" + p.id}>
                    {t("view")}
                </a>
                <button className="btn red" onClick={() => setOrder(p.name)}>
                    {t("order")}
                </button>
            </div>
        </Tilt>
    );
    const Contact = () => {
        const [f, setF] = useState({ n: "", p: "", c: "", r: P[0].name, m: "" }),
            s = (k) => (e) => setF({ ...f, [k]: e.target.value });
        return (
            <section id="contact" className="sec">
                <div className="wrap grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <H2>{t("cont")}</H2>
                        <p>{C.addr}</p>
                        <p className="my-3">
                            <b>{C.phone}</b> · {C.phone2}
                            <br />
                            {C.email}
                            <br />
                            {C.hours}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <a className="btn red" href={"tel:" + C.phone.replace(/ /g, "")}>
                                {t("call")}
                            </a>
                            <a
                                className="btn"
                                target="_blank"
                                rel="noreferrer"
                                href={
                                    "https://www.google.com/maps/search/?api=1&query=" +
                                    encodeURIComponent(C.addr)
                                }
                            >
                                Google Maps
                            </a>
                        </div>
                    </div>
                    <div className="glass p-5">
                        <label>{t("name")}</label>
                        <input className="inp" value={f.n} onChange={s("n")} />
                        <label>{t("phone")}</label>
                        <input className="inp" type="tel" value={f.p} onChange={s("p")} />
                        <label>{t("city")}</label>
                        <input className="inp" value={f.c} onChange={s("c")} />
                        <label>{t("prod")}</label>
                        <select
                            className="inp"
                            value={f.r}
                            onChange={s("r")}
                        >
                            {P.map((p) => (
                                <option key={p.id}>{p.name}</option>
                            ))}
                            <option>Water ATM</option>
                        </select>
                        <label>{t("msg")}</label>
                        <textarea className="inp" rows="3" value={f.m} onChange={s("m")} />
                        <button
                            className="btn red"
                            onClick={() =>
                                wa(
                                    `Hello, I have an enquiry.\nProduct: ${f.r}\nName: ${f.n}\nPhone: ${f.p}\nCity: ${f.c}\nMessage: ${f.m}`,
                                )
                            }
                        >
                            {t("send")}
                        </button>
                    </div>
                </div>
            </section>
        );
    };
    
    const SERVICES = {
  commercial: [
    ['01 — 1 Year Complete Machine Warranty', 'Complete machine warranty for 1 year, covering eligible manufacturing defects and product-related issues as per warranty terms.', '01 — 1 वर्ष की पूरी मशीन वारंटी', '1 वर्ष की पूरी मशीन वारंटी, वारंटी शर्तों के अनुसार पात्र मैन्युफैक्चरिंग दोषों और उत्पाद संबंधी समस्याओं के लिए।'],
    ['02 — 15 Years Plate Warranty', 'Up to 15 years warranty on ionizer plates, subject to applicable warranty terms and conditions.', '02 — 15 वर्ष की प्लेट वारंटी', 'आयोनाइज़र प्लेटों पर 15 वर्ष तक की वारंटी, लागू वारंटी नियमों और शर्तों के अधीन।'],
    ['03 — 3 Services Every Year', 'Get 3 scheduled services every year to help maintain your machine and ensure smooth operation.', '03 — हर साल 3 सर्विस', 'आपकी मशीन को सही रखने और सुचारु संचालन के लिए हर साल 3 निर्धारित सर्विस।'],
  ],
  domestic: [
    ['04 — Customized Plate Options', 'Choose from 5, 7, and 9 plate configurations based on your requirements. Pricing varies according to the selected plate configuration.', '04 — कस्टमाइज़ प्लेट विकल्प', 'अपनी ज़रूरत के अनुसार 5, 7 और 9 प्लेट कॉन्फ़िगरेशन में से चुनें। कीमत चुने गए प्लेट कॉन्फ़िगरेशन के अनुसार बदलती है।'],
    ['05 — Expert Installation Support', 'Professional installation assistance to ensure your water ionizer is properly installed and ready to use.', '05 — एक्सपर्ट इंस्टॉलेशन सपोर्ट', 'आपका वाटर आयोनाइज़र सही तरीके से लगे और उपयोग के लिए तैयार हो, इसके लिए प्रोफ़ेशनल इंस्टॉलेशन सहायता।'],
    ['06 — Technical & Customer Support', 'Dedicated assistance for product operation, troubleshooting, and technical queries.', '06 — तकनीकी एवं कस्टमर सपोर्ट', 'प्रोडक्ट के संचालन, समस्या समाधान और तकनीकी प्रश्नों के लिए समर्पित सहायता।'],
    ['07 — Genuine Spare Parts Support', 'Reliable support for genuine and compatible replacement parts for long-term maintenance.', '07 — जेन्युइन स्पेयर पार्ट्स सपोर्ट', 'लंबे समय के मेंटेनेंस के लिए जेन्युइन और संगत रिप्लेसमेंट पार्ट्स का भरोसेमंद सपोर्ट।'],
  ],
}

const Services = () => {
  const hi = L === 'hi'
  const groups = [
    { title: hi ? 'कमर्शियल प्रोडक्ट के लिए' : 'For Commercial Products', list: SERVICES.commercial, cols: 'lg:grid-cols-3' },
    { title: hi ? 'घरेलू प्रोडक्ट के लिए' : 'For Domestic Products', list: SERVICES.domestic, cols: 'lg:grid-cols-4' },
  ]
  return (
    <section id="services" className="sec">
      <div className="wrap">
        <H2>{hi ? 'हमारी सेवाएँ और लाभ' : 'Our Services & Benefits'}</H2>
        {groups.map((g) => (
          <div key={g.title} className="mb-10">
            <h3 className="inline-block font-serif text-xl border-b-2 border-red-600 pb-1 mb-4">{g.title}</h3>
            <div className={'grid sm:grid-cols-2 gap-5 ' + g.cols}>
              {g.list.map((s) => (
                <Box key={s[0]} h={hi ? s[2] : s[0]} p={hi ? s[3] : s[1]} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

    const Bar = ({ l, note, left, w, g, ends }) => (
        <div className="mb-6">
            <b>{l}</b> <span className="opacity-70 text-sm">— {note}</span>
            <div
                className="h-3.5 rounded-full relative mt-8 mb-1"
                style={{ background: g }}
            >
                <span
                    className="absolute -top-1 -bottom-1 border-2 border-current rounded transition-all duration-[1600ms]"
                    style={{ left, width: w }}
                />
            </div>
            <div className="flex justify-between text-xs opacity-70">
                {ends.map((e) => (
                    <span key={e}>{e}</span>
                ))}
            </div>
        </div>
    );
    const Quality = () => (
        <>
            <section id="benefits" className="sec">
                <div className="wrap">
                    <H2>{t("ben")}</H2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {BEN.map((b) => (
                            <Box key={b[0]} h={b[0]} p={b[1]} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="sec pt-0">
                <div className="wrap">
                    <H2>{t("wq")}</H2>
                    <p className="opacity-70 max-w-2xl mb-4">{t("wqP")}</p>
                    <div className="glass p-5">
                        <Bar
                            l="pH"
                            note="BIS acceptable range 6.5–8.5 (outlined)"
                            left="46.4%"
                            w="14.3%"
                            g="linear-gradient(90deg,#e64,#ec3,#4b6,#38c,#63c)"
                            ends={["0", "7", "14"]}
                        />
                        <Bar
                            l="TDS"
                            note="BIS acceptable limit 500 mg/L; up to 2000 if no better source (outlined)"
                            left="0"
                            w="25%"
                            g="linear-gradient(90deg,#4b6,#ec3,#e64)"
                            ends={["0", "500", "2000 mg/L"]}
                        />
                        {[
                            "Minerals",
                            "Contaminants",
                            "Microbiological quality",
                            "Taste & odour",
                            "Filtration",
                        ].map((x) => (
                            <span key={x} className="chip">{x}</span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
    const Certs = () => (
        <section className="sec pt-28">
            <div className="wrap">
                <h1 className="font-serif text-3xl md:text-4xl mb-4">Certificates</h1>
                <p className="mb-4">Owner Info.</p>
            </div>
        </section>
    );
    const Home = () => (
        <>
            <header
                id="top"
                className="relative h-[84vh] min-h-[520px] -mt-16 overflow-hidden bg-slate-950 text-white"
            >
                {["a1", "a2", "d3"].map((k, i) => (
                    <img
                        key={k}
                        src={IM[k]}
                        alt="Manthan Jal"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i == si ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 14 }, (_, i) => (
                        <i
                            key={i}
                            className="absolute bottom-0 rounded-full border border-white/40"
                            style={{
                                left: ((i * 37) % 100) + "%",
                                width: 6 + (i % 5) * 4,
                                height: 6 + (i % 5) * 4,
                                animation: `up ${8 + (i % 6) * 2}s linear -${i}s infinite`,
                            }}
                        />
                    ))}
                </div>
                <div className="wrap absolute inset-x-0 bottom-[16%]">
                    <h1 className="font-serif text-4xl md:text-6xl max-w-3xl leading-tight mb-3">
                        {t("h1")}
                    </h1>
                    <p className="max-w-lg text-sky-100 mb-5">{t("h1p")}</p>
                    <div className="flex gap-3 flex-wrap">
                        <button className="btn red" onClick={() => jump("products")}>
                            {t("explore")}
                        </button>
                        <button
    className="btn !bg-white/15 !text-white hover:!bg-white/25 backdrop-blur"
    onClick={() => setOrder(P[0].name)}>
                            {t("order")}
                        </button>
                    </div>
                </div>
                <button
                    aria-label="Previous"
                    className="bg-black/30 hover:bg-black/50 text-white text-xl"
                    onClick={() => setSi((si + 2) % 3)}
                >
                    ‹
                </button>
                <button
                    aria-label="Next"
                    className="absolute right-3 top-1/2 w-10 h-10 rounded-full bg-white/15 border border-white/40 text-xl"
                    onClick={() => setSi((si + 1) % 3)}
                >
                    ›
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <b
                            key={i}
                            onClick={() => setSi(i)}
                            className={`h-2.5 rounded-full cursor-pointer transition-all ${i == si ? "w-6 bg-red-600" : "w-2.5 bg-white/40"}`}
                        />
                    ))}
                </div>
            </header>
            <Softener
                L={L}
                onQuote={() => setOrder("Manthan Jal Water Electrolysis Water Softener")}
                onWa={() => wa("Hello, I want to know more about the Manthan Jal Water Electrolysis Water Softener.")}
            />
            <div className="flex justify-center gap-4 py-6">
                {Object.entries(C.social).map(([n, v]) => (
                    <a
                        key={n}
                        title={n}
                        aria-label={n}
                        href={v[1]}
                        target="_blank"
                        rel="noreferrer"
                        className="glass w-11 h-11 grid place-items-center font-bold hover:scale-110 hover:text-cyan-500 hover:shadow-[0_0_18px_#22d3ee] transition"
                    >
                        {v[0]}
                    </a>
                ))}
            </div>
            <section id="products" className="sec">
                <div className="wrap">
                    <H2>{t("comm")}</H2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {P.filter((p) => p.type == "c").map((p) => (
                            <Card key={p.id} p={p} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="sec pt-0">
                <div className="wrap">
                    <H2>{t("dom")}</H2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {P.filter((p) => p.type == "d").map((p) => (
                            <Card key={p.id} p={p} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="sec pt-0">
                <div className="wrap grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <H2>{t("atmT")}</H2>
                        <p className="mb-4">{t("atmP")}</p>
                        <a className="btn red" href="#/atm">
                            {t("explore")}
                        </a>
                    </div>
                    <Img s={IM.a2} alt="Water ATM" />
                </div>
            </section>
            <Services />
            <Quality />
            <Contact />
        </>
    );
    const Atm = () => (
        <>
            <section className="sec pt-28">
                <div className="wrap grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="font-serif text-4xl md:text-5xl mb-3">
                            {t("atmT")}
                        </h1>
                        <p className="mb-4">{t("atmP")}</p>
                        <button
                            className="btn red"
                            onClick={() => setOrder("Manthan Jal Water ATM")}
                        >
                            {t("order")}
                        </button>
                    </div>
                    <Img s={IM.a1} alt="Water ATM at hotel" float />
                </div>
            </section>
            <section className="sec pt-0">
                <div className="wrap">
                    <H2>{t("feat")}</H2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            [
                                "Touch screen",
                                "Select the water and quantity on a colour display.",
                            ],
                            [
                                "QR-code payment",
                                "Scan and pay online; 24/7 ordering and instant dispensing.",
                            ],
                            ["Bottle bay", "Lit dispensing bay for bottles or glasses."],
                            [
                                "Alkaline ionized water",
                                "Based on Manthan Jal ionizer technology.",
                            ],
                            [
                                "Stainless steel body",
                                "Weather-ready cabinet for street or lobby.",
                            ],
                            ["Bilingual branding", "Hindi and English panels on request."],
                        ].map((f) => (
                            <Box key={f[0]} h={f[0]} p={f[1]} />
                        ))}
                    </div>
                    <h2 className="font-serif text-3xl mt-12 mb-3">Where it fits</h2>
                    {[
                        "Hotels",
                        "Public places",
                        "Schools",
                        "Offices",
                        "Communities",
                        "Commercial areas",
                        "Institutions",
                    ].map((x) => (
                        <span
                            key={x}
                            className="chip"
                        >
                            {x}
                        </span>
                    ))}
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <Img s={IM.a2} alt="Water ATM street" />
                        <Img s={IM.a1} alt="Water ATM" />
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
    const Detail = ({ p }) => (
        <section className="sec pt-28">
            <div className="wrap">
                <div className="grid md:grid-cols-2 gap-10">
                    <Tilt>
                        <Img s={IM[p.img]} alt={p.name} float />
                    </Tilt>
                    <div>
                        <h1 className="font-serif text-3xl md:text-4xl mb-2">{p.name}</h1>
                        <p className="mb-2">{p.short}</p>
                        <div className="font-serif text-2xl font-bold text-red-600 mb-3">
                            {pr(p)}
                        </div>
                        <h3 className="font-serif text-lg">{t("feat")}</h3>
                        <ul className="list-disc pl-5 my-2 mb-4">
                            {p.feat.map((f) => (
                                <li key={f}>{f}</li>
                            ))}
                        </ul>
                        <button className="btn red" onClick={() => setOrder(p.name)}>
                            {t("order")}
                        </button>
                    </div>
                </div>
                <h2 className="font-serif text-3xl mt-12 mb-3">{t("specs")}</h2>
                <div className="glass overflow-x-auto">
                    <table className="w-full text-sm">
                        <tbody>
                            {p.spec.map((r) => (
                                <tr key={r[0]} className="border-b border-sky-700/15">
                                    <td className="p-2.5 opacity-70 w-2/5">{r[0]}</td>
                                    <td className="p-2.5">{r[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="opacity-70 mt-3">
                    Installation and demonstration by our team. Warranty terms are given
                    at purchase — ask us on WhatsApp.
                </p>
                <h2 className="font-serif text-3xl mt-10 mb-2">{t("faq")}</h2>
                {[
                    [
                        "Which water can I use?",
                        p.type == "c"
                            ? "Input water with 500 to 1000 TDS."
                            : "Input water up to " +
                            p.tds +
                            " TDS, such as municipal supply.",
                    ],
                    [
                        "Can I get titanium plates?",
                        "Yes, a titanium plate chamber is available at extra charge.",
                    ],
                    [
                        "How often do filters change?",
                        "Filter life depends on your water quality.",
                    ],
                ].map((f) => (
                    <details key={f[0]} className="border-b border-sky-700/15 py-2">
                        <summary className="cursor-pointer font-semibold">{f[0]}</summary>
                        <p className="py-2">{f[1]}</p>
                    </details>
                ))}
            </div>
        </section>
    );
    const Order = () => {
        const [f, setF] = useState({ n: "", p: "", a: "", c: "", q: 1, m: "" }),
            s = (k) => (e) => setF({ ...f, [k]: e.target.value });
        const go = () => {
            if (!f.n || !f.p)
                return alert("Please enter your name and phone number.");
            wa(
                `Hello, I want to order the following product.\n\nProduct: ${order}\nQuantity: ${f.q}\nName: ${f.n}\nPhone: ${f.p}\nAddress: ${f.a}\nCity: ${f.c}\nAdditional Message: ${f.m}\n\nPlease provide me with the price and further ordering details.`,
            );
            setOrder(null);
        };
        return (
            <div
                className="fixed inset-0 z-[99] bg-slate-950/60 grid place-items-center p-4 overflow-auto"
                onClick={(e) => e.target == e.currentTarget && setOrder(null)}
            >
                <div className="glass !bg-white dark:!bg-slate-900 w-full max-w-md p-6">
                    <h3 className="font-serif text-xl mb-2">{t("order")}</h3>
                    <label>{t("prod")}</label>
                    <input className="inp" readOnly value={order} />
                    {[
                        ["name", "n"],
                        ["phone", "p"],
                        ["addr", "a"],
                        ["city", "c"],
                        ["qty", "q"],
                        ["msg", "m"],
                    ].map(([l, k]) => (
                        <div key={k}>
                            <label>{t(l)}</label>
                            <input
                                className="inp"
                                type={k == "q" ? "number" : k == "p" ? "tel" : "text"}
                                min="1"
                                value={f[k]}
                                onChange={s(k)}
                            />
                        </div>
                    ))}
                    <div className="flex gap-2">
                        <button className="btn red" onClick={go}>
                            {t("place")}
                        </button>
                        <button className="btn" onClick={() => setOrder(null)}>
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div>
            <nav className="sticky top-0 z-50">
    <div className={`absolute inset-0 -z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg transition-shadow ${sc ? "shadow-md" : ""}`} />
    <div className="wrap h-16 flex items-center gap-3">
        <a href="#/" className="mr-auto flex items-center gap-2 font-serif font-bold text-xl">
    <img src={logo} alt="Manthan Jal logo" className="h-11 w-11 rounded-full object-cover" />
    <span className="hidden sm:inline">{C.name}</span>
</a>
        <div
            className={`fixed lg:static top-16 right-0 bottom-0 w-64 lg:w-auto flex flex-col lg:flex-row gap-5 p-6 lg:p-0 bg-white dark:bg-slate-900 lg:bg-transparent dark:lg:bg-transparent shadow-xl lg:shadow-none transition-transform ${menu ? "" : "translate-x-full lg:translate-x-0"}`}
        >
            {nav.map((n) => (
                <button key={n[0]} className="text-sm text-left hover:text-cyan-500" onClick={() => jump(n[1])}>
                    {t(n[0])}
                </button>
            ))}
            <a className="text-sm hover:text-cyan-500" href="#/atm" onClick={() => setMenu(false)}>
                {t("atm")}
            </a>
            <a className="text-sm hover:text-cyan-500" href="#/about" onClick={() => setMenu(false)}>
                About Owner
            </a>
        </div>
        <button className="btn !py-1" onClick={() => setL(L == "en" ? "hi" : "en")}>
            {L == "en" ? "हिंदी" : "EN"}
        </button>
        <button className="btn !py-1" aria-label="Theme" onClick={() => setDark(!dark)}>
            {dark ? "☀" : "☾"}
        </button>
        <button
            className="btn red !py-1 hidden md:inline-flex"
            onClick={() => wa("Hello, I want to know more about Manthan Jal products.")}
        >
            {t("order")}
        </button>
        <button className="btn !py-1 lg:hidden" aria-label="Menu" onClick={() => setMenu(!menu)}>
            ☰
        </button>
    </div>
</nav>
            {prod ? <Detail p={prod} /> : isAtm ? <Atm /> : route == "#/about" ? <OwnerPage L={L} /> : <Home />}
            <Distributor L={L} />
            <footer className="bg-[#06182b] text-sky-100/80 pt-14 pb-6">
                <div className="wrap grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                    <div>
                        <img src={logo} alt="Manthan Jal logo" className="h-20 w-20 rounded-full mb-3" />
                        <h3 className="text-white font-serif text-lg">{C.name}</h3>
                        <p>Alkaline water ionizers manufactured in Surat, Gujarat.</p>
                    </div>
                    <div>
                        <h3 className="text-white font-serif text-lg">{t("products")}</h3>
                        {P.map((p) => (
                            <a key={p.id} className="block py-0.5" href={"#/p/" + p.id}>
                                {p.name}
                            </a>
                        ))}
                        <a className="block py-0.5" href="#/atm">
                            {t("atm")}
                        </a>
                    </div>
                    <div>
                        <h3 className="text-white font-serif text-lg">{t("services")}</h3>
                        {T[L].s.slice(0, 5).map((s) => (
                            <button
                                key={s}
                                className="block py-0.5"
                                onClick={() => jump("services")}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-white font-serif text-lg">{t("contact")}</h3>
                        <a className="block" href={"tel:" + C.phone.replace(/ /g, "")}>
                            {C.phone}
                        </a>
                        <a className="block" href={"mailto:" + C.email}>
                            {C.email}
                        </a>
                        <span>{C.addr}</span>
                    </div>
                </div>
                <p className="wrap mt-8 text-xs">
                    © {new Date().getFullYear()} {C.name} · Jyoti Trading Company
                </p>
            </footer>
            {order && <Order />}
        </div>
    );
}
