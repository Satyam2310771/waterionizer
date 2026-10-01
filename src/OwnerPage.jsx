import { useState } from "react";
import ownerImg from "./assets/owner.jpg";

const B = import.meta.env.BASE_URL;

const CERTS = [
  {
    id: "iso9001",
    title: "ISO 9001:2015",
    en: "Quality Management System",
    hi: "क्वालिटी मैनेजमेंट सिस्टम",
    no: "25DQOR76",
    exp: "13 May 2028",
  },
  {
    id: "iso13485",
    title: "ISO 13485:2016",
    en: "Medical Devices – Quality Management System",
    hi: "मेडिकल डिवाइस – क्वालिटी मैनेजमेंट सिस्टम",
    no: "IN240201006",
    exp: "13 Jan 2027 (audit due)",
  },
  {
    id: "gmp",
    title: "GMP",
    en: "Good Manufacturing Practice",
    hi: "गुड मैन्युफैक्चरिंग प्रैक्टिस",
    no: "24DGOD16",
    exp: "12 Jan 2028",
  },
  {
    id: "ce",
    title: "CE",
    en: "Low Voltage & Machinery Directive",
    hi: "लो वोल्टेज एवं मशीनरी डायरेक्टिव",
    no: "CE-6372",
    exp: "12 Jan 2028",
  },
  {
    id: "rohs",
    title: "RoHS",
    en: "Restriction of Hazardous Substances",
    hi: "रिस्ट्रिक्शन ऑफ हैज़ार्डस सब्सटेंसेज़",
    no: "UQ-2025012239",
    exp: "12 Jan 2028",
  },
];

const O = {
  name: "Alpesh Bhai Prabhu Lal Chotaliya",
  phone: "+91 87809 63596",
  wa: "918780963596",
  email: "bhanachotaliya@gmail.com",
  role: { en: "CEO & Founder", hi: "सीईओ एवं संस्थापक" },
  bio: {
    en: [
      "Alpesh Chotaliya is the CEO and Founder of Manthan Jal, based in Chalthan, Surat, Gujarat.",
      "He has been associated with Manthan Jal ionizers since 2014, and with Biological Nano Active Science, Russia, since 2012.",
      "Manthan Jal manufactures alkaline water ionizers for home and commercial use, and the Manthan Jal Water ATM.",
    ],
    hi: [
      "अल्पेश चोटालिया मंथन जल के सीईओ एवं संस्थापक हैं, जो चलथान, सूरत, गुजरात में स्थित है।",
      "वे 2014 से मंथन जल आयोनाइज़र से और 2012 से बायोलॉजिकल नैनो एक्टिव साइंस, रूस से जुड़े हुए हैं।",
      "मंथन जल घरेलू और कमर्शियल उपयोग के लिए अल्कलाइन वाटर आयोनाइज़र और मंथन जल वाटर ATM बनाती है।",
    ],
  },
  info: {
    en: [
      ["Designation", "CEO & Founder"],
      ["Company", "Manthan Jal"],
      ["With Manthan Jal ionizers since", "2014"],
      ["With Biological Nano Active Science, Russia since", "2012"],
      ["Website", "www.manthanjal.com"],
      [
        "Address",
        "130, Jalaram Complex, Opp. Green Valley, Chalthan - 394305, Surat, Gujarat",
      ],
    ],
    hi: [
      ["पद", "सीईओ एवं संस्थापक"],
      ["कंपनी", "मंथन जल"],
      ["मंथन जल आयोनाइज़र से जुड़ाव", "2014 से"],
      ["बायोलॉजिकल नैनो एक्टिव साइंस, रूस से जुड़ाव", "2012 से"],
      ["वेबसाइट", "www.manthanjal.com"],
      [
        "पता",
        "130, जलाराम कॉम्प्लेक्स, ग्रीन वैली के सामने, चलथान - 394305, सूरत, गुजरात",
      ],
    ],
  },
};

export default function OwnerPage({ L = "en" }) {
  const hi = L === "hi";
  const [open, setOpen] = useState(null);
  const rows = [
    ...O.info[L],
    [hi ? "फ़ोन" : "Phone", O.phone],
    ["Email", O.email],
  ];
  const img = (c) => B + "certificates/" + c.id + ".jpg";
  const pdf = (c) => B + "certificates/" + c.id + ".pdf";
  return (
    <section className="py-16 pt-28">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-[320px_1fr] gap-10 items-start">
        <div className="glass p-2">
          <img
            src={ownerImg}
            alt={O.name}
            className="w-full rounded aspect-[4/5] object-cover"
          />
        </div>
        <div>
          <h1 className="font-serif text-3xl md:text-4xl mb-1">{O.name}</h1>
          <p className="text-cyan-600 dark:text-cyan-300 font-semibold mb-4">
            {O.role[L]}
          </p>
          {O.bio[L].map((p, i) => (
            <p key={i} className="mb-3">
              {p}
            </p>
          ))}
          <div className="glass mt-5 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]} className="border-b border-sky-700/15">
                    <td className="p-2.5 opacity-70 w-1/3">{r[0]}</td>
                    <td className="p-2.5">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-2 flex-wrap mt-5">
            <a className="btn red" href={"tel:" + O.phone.replace(/ /g, "")}>
              {hi ? "अभी कॉल करें" : "Call now"}
            </a>
            <a
              className="btn"
              target="_blank"
              rel="noreferrer"
              href={"https://wa.me/" + O.wa}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 mt-16">
        <h2 className="font-serif text-3xl md:text-4xl mb-1">
          {hi ? "प्रमाणपत्र" : "Certificates"}
        </h2>
        <p className="opacity-70 mb-6 text-sm">
          {hi
            ? "निर्माता: दिव्यजीवन हेल्थ केयर, सूरत। देखने के लिए प्रमाणपत्र पर क्लिक करें।"
            : "Issued to the manufacturer, Divyajivan Health Care, Surat. Click a certificate to open it."}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CERTS.map((c) => (
            <button
              key={c.id}
              onClick={() => setOpen(c)}
              className="glass p-3 text-left hover:-translate-y-1 hover:ring-1 hover:ring-cyan-400 transition"
            >
              <img
                src={img(c)}
                alt={c.title + " certificate"}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover object-top rounded mb-3"
              />
              <h3 className="font-serif font-bold">{c.title}</h3>
              <p className="text-xs opacity-70 mb-1">{c[L]}</p>
              <p className="text-xs opacity-70">
                {hi ? "क्र." : "No."} {c.no}
              </p>
              <p className="text-xs opacity-70">
                {hi ? "वैधता" : "Valid till"}: {c.exp}
              </p>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/80 grid place-items-center p-4 overflow-auto"
          onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        >
          <div className="glass !bg-sky-50 dark:!bg-slate-900 w-full max-w-2xl p-4">
            <img
              src={img(open)}
              alt={open.title + " certificate"}
              className="w-full rounded mb-3"
            />
            <div className="flex gap-2 flex-wrap">
              <a
                className="btn red"
                href={pdf(open)}
                target="_blank"
                rel="noreferrer"
              >
                {hi ? "PDF खोलें" : "Open PDF"}
              </a>
              <button className="btn" onClick={() => setOpen(null)}>
                {hi ? "बंद करें" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
