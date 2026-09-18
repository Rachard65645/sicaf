import { useState, useEffect, useRef } from "react";
import {
  Home, Users, Plus, Bell, User, ArrowLeft, Search, CheckCircle2,
  Send, ChevronRight,
  ShoppingBag, RotateCcw, MessageCircle, UserPlus, ReceiptText
} from "lucide-react";

const fmt = (n) => n.toLocaleString("fr-FR") + " FCFA";

const initialClients = [
  {
    id: 1,
    name: "Amina Njoya",
    phone: "677 12 34 56",
    quartier: "Mokolo",
    initials: "AN",
    history: [
      { id: "h1", type: "vente", amount: 8000, product: "Riz + huile", date: "15 août", due: "25 août", overdue: true },
    ],
  },
  {
    id: 2,
    name: "Paul Etoundi",
    phone: "691 22 33 44",
    quartier: "Nlongkak",
    initials: "PE",
    history: [
      { id: "h2", type: "vente", amount: 5000, product: "Recharges + savon", date: "20 août", due: "30 août", overdue: false },
    ],
  },
  {
    id: 3,
    name: "Marceline Fotso",
    quartier: "Essos",
    phone: "655 98 76 54",
    initials: "MF",
    history: [
      { id: "h3", type: "vente", amount: 12000, product: "Marchandise boutique", date: "10 août", due: "22 août", overdue: true },
      { id: "h4", type: "remboursement", amount: 4000, date: "24 août" },
    ],
  },
  {
    id: 4,
    name: "Ibrahim Bello",
    quartier: "Briqueterie",
    phone: "699 11 22 33",
    initials: "IB",
    history: [
      { id: "h5", type: "vente", amount: 10000, product: "Ciment + fer", date: "5 août", due: "18 août", overdue: false },
      { id: "h6", type: "remboursement", amount: 10000, date: "18 août" },
    ],
  },
  {
    id: 5,
    name: "Sylvie Manga",
    quartier: "Nsam",
    phone: "670 44 55 66",
    initials: "SM",
    history: [
      { id: "h7", type: "vente", amount: 3000, product: "Condiments", date: "26 août", due: "5 sept", overdue: false },
    ],
  },
  {
    id: 6,
    name: "Jean-Claude Abomo",
    quartier: "Mvog-Ada",
    phone: "680 77 88 99",
    initials: "JA",
    history: [
      { id: "h8", type: "vente", amount: 20000, product: "Matériel électrique", date: "3 août", due: "10 août", overdue: true },
    ],
  },
];

const initialReminders = [
  { id: "r1", client: "Jean-Claude Abomo", date: "29 août, 08:12", stage: "Relance 2", status: "Livré" },
  { id: "r2", client: "Amina Njoya", date: "27 août, 09:00", stage: "Rappel", status: "Livré" },
  { id: "r3", client: "Marceline Fotso", date: "26 août, 09:00", stage: "Rappel", status: "Livré" },
  { id: "r4", client: "Jean-Claude Abomo", date: "20 août, 09:00", stage: "Rappel", status: "Livré" },
];

function balanceOf(client) {
  return client.history.reduce((sum, h) => sum + (h.type === "vente" ? h.amount : -h.amount), 0);
}

function statusOf(client) {
  const bal = balanceOf(client);
  if (bal <= 0) return "a_jour";
  const hasOverdue = client.history.some((h) => h.type === "vente" && h.overdue);
  return hasOverdue ? "retard" : "en_cours";
}

const STATUS_META = {
  a_jour: { label: "A jour", color: "#3F7D5C", bg: "#E4EEE7" },
  en_cours: { label: "En cours", color: "#9C6B1F", bg: "#F3E8D2" },
  retard: { label: "En retard", color: "#A8402E", bg: "#F3DFDA" },
};

function StatusBadge({ status }) {
  const meta = STATUS_META[status];
  return (
    <span
      style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: 11,
        fontWeight: 600,
        color: meta.color,
        background: meta.bg,
        padding: "3px 9px",
        borderRadius: 20,
        letterSpacing: 0.2,
        whiteSpace: "nowrap",
      }}
    >
      {meta.label}
    </span>
  );
}

function Avatar({ initials, size = 40 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#1B2A4A",
        color: "#F3E9D3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Fraunces', serif",
        fontWeight: 600,
        fontSize: size * 0.38,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

function TopBar({ title, onBack, right }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 16px",
        borderBottom: "1px solid #E3D5B4",
        background: "#F3E9D3",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 32 }}>
        {onBack && (
          <button
            onClick={onBack}
            style={{ background: "none", border: "none", padding: 4, cursor: "pointer", color: "#1B2A4A" }}
          >
            <ArrowLeft size={20} />
          </button>
        )}
      </div>
      <div
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontSize: 17,
          color: "#1B2A4A",
          textAlign: "center",
          flex: 1,
        }}
      >
        {title}
      </div>
      <div style={{ minWidth: 32, display: "flex", justifyContent: "flex-end" }}>{right}</div>
    </div>
  );
}

// function LedgerDivider() {
//   return (
//     <div
//       style={{
//         height: 0,
//         borderTop: "1.5px dashed #D6C49A",
//         margin: "0 16px",
//       }}
//     />
//   );
// }

// ---------- Screens ----------

function DashboardScreen({ clients, onOpenClient}) {
  const totalDue = clients.reduce((s, c) => s + Math.max(balanceOf(c), 0), 0);
  const overdueClients = clients.filter((c) => statusOf(c) === "retard");
  const totalOverdue = overdueClients.reduce((s, c) => s + balanceOf(c), 0);
  const sorted = [...clients].sort((a, b) => {
    const order = { retard: 0, en_cours: 1, a_jour: 2 };
    return order[statusOf(a)] - order[statusOf(b)];
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar title="Kaso" right={<Avatar initials="MB" size={30} />} />
      <div style={{ overflowY: "auto", flex: 1, paddingBottom: 8 }}>
        <div style={{ padding: "18px 16px 8px" }}>
          <div
            style={{
              background: "#1B2A4A",
              borderRadius: 16,
              padding: "18px 18px 16px",
              color: "#F3E9D3",
            }}
          >
            <div style={{ fontSize: 12, opacity: 0.75, fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: 4 }}>
              Total à recouvrer
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 30, fontWeight: 600, marginBottom: 14 }}>
              {fmt(totalDue)}
            </div>
            <div style={{ display: "flex", gap: 18 }}>
              <div>
                <div style={{ fontSize: 11, opacity: 0.7, fontFamily: "'IBM Plex Sans', sans-serif" }}>En retard</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 15, color: "#E9A190" }}>
                  {fmt(totalOverdue)}
                </div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.2)" }} />
              <div>
                <div style={{ fontSize: 11, opacity: 0.7, fontFamily: "'IBM Plex Sans', sans-serif" }}>Clients</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 15 }}>{clients.length}</div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.2)" }} />
              <div>
                <div style={{ fontSize: 11, opacity: 0.7, fontFamily: "'IBM Plex Sans', sans-serif" }}>A relancer</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 15, color: "#E9A190" }}>
                  {overdueClients.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "10px 16px 4px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 15, color: "#1B2A4A" }}>
            A surveiller
          </div>
          <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, color: "#8A7A57" }}>
            {clients.length} au total
          </div>
        </div>

        <div style={{ padding: "6px 12px 90px" }}>
          {sorted.map((c) => {
            const bal = balanceOf(c);
            const status = statusOf(c);
            return (
              <button
                key={c.id}
                onClick={() => onOpenClient(c.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 8px",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid #E9DFC4",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <Avatar initials={c.initials} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14.5, color: "#1B2A4A" }}>
                    {c.name}
                  </div>
                  <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, color: "#8A7A57" }}>
                    {c.quartier}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 14,
                      fontWeight: 600,
                      color: bal > 0 ? "#1B2A4A" : "#3F7D5C",
                      marginBottom: 4,
                    }}
                  >
                    {bal > 0 ? fmt(bal) : "Soldé"}
                  </div>
                  <StatusBadge status={status} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ClientsScreen({ clients, onOpenClient }) {
  const [query, setQuery] = useState("");
  const filtered = clients.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar title="Clients" />
      <div style={{ padding: "12px 16px 8px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#FFFDF8",
            border: "1px solid #E3D5B4",
            borderRadius: 10,
            padding: "9px 12px",
          }}
        >
          <Search size={16} color="#8A7A57" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un client"
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: 14,
              width: "100%",
              color: "#1B2A4A",
            }}
          />
        </div>
      </div>
      <div style={{ overflowY: "auto", flex: 1, padding: "4px 12px 90px" }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "#8A7A57", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13 }}>
            Aucun client ne correspond.
          </div>
        )}
        {filtered.map((c) => {
          const bal = balanceOf(c);
          const status = statusOf(c);
          return (
            <button
              key={c.id}
              onClick={() => onOpenClient(c.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 8px",
                background: "none",
                border: "none",
                borderBottom: "1px solid #E9DFC4",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <Avatar initials={c.initials} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14.5, color: "#1B2A4A" }}>
                  {c.name}
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: "#8A7A57" }}>
                  {c.phone}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 600, color: bal > 0 ? "#1B2A4A" : "#3F7D5C", marginBottom: 4 }}>
                  {bal > 0 ? fmt(bal) : "Soldé"}
                </div>
                <StatusBadge status={status} />
              </div>
              <ChevronRight size={16} color="#C9B98C" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ClientDetailScreen({ client, onBack, onNewSale, onNewRepayment, onRemind }) {
  const bal = balanceOf(client);
  const status = statusOf(client);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar title="Fiche client" onBack={onBack} />
      <div style={{ overflowY: "auto", flex: 1, paddingBottom: 90 }}>
        <div style={{ padding: "20px 16px 12px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Avatar initials={client.initials} size={60} />
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 19, color: "#1B2A4A", marginTop: 10 }}>
            {client.name}
          </div>
          <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: "#8A7A57", marginTop: 2 }}>
            {client.quartier} &middot; {client.phone}
          </div>
          <div style={{ marginTop: 10 }}>
            <StatusBadge status={status} />
          </div>
        </div>

        <div style={{ margin: "8px 16px 18px", background: "#FFFDF8", border: "1px solid #E3D5B4", borderRadius: 14, padding: "16px 18px" }}>
          <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, color: "#8A7A57", marginBottom: 4 }}>
            Solde actuel
          </div>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 26,
              fontWeight: 600,
              color: bal > 0 ? "#A8402E" : "#3F7D5C",
            }}
          >
            {bal > 0 ? fmt(bal) : "0 FCFA — soldé"}
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, padding: "0 16px 18px" }}>
          <button
            onClick={onNewSale}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              padding: "12px 8px",
              background: "#1B2A4A",
              color: "#F3E9D3",
              border: "none",
              borderRadius: 12,
              cursor: "pointer",
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: 12.5,
              fontWeight: 600,
            }}
          >
            <ShoppingBag size={18} />
            Vente à crédit
          </button>
          <button
            onClick={onNewRepayment}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              padding: "12px 8px",
              background: "#3F7D5C",
              color: "#F3E9D3",
              border: "none",
              borderRadius: 12,
              cursor: "pointer",
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: 12.5,
              fontWeight: 600,
            }}
          >
            <CheckCircle2 size={18} />
            Remboursement
          </button>
          <button
            onClick={onRemind}
            disabled={bal <= 0}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              padding: "12px 8px",
              background: bal > 0 ? "#C97A3D" : "#E9DFC4",
              color: bal > 0 ? "#F3E9D3" : "#B4A87F",
              border: "none",
              borderRadius: 12,
              cursor: bal > 0 ? "pointer" : "default",
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: 12.5,
              fontWeight: 600,
            }}
          >
            <Send size={18} />
            Rappel SMS
          </button>
        </div>

        <div style={{ padding: "0 16px 8px", fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 15, color: "#1B2A4A" }}>
          Historique
        </div>
        <div style={{ padding: "0 16px" }}>
          {[...client.history].reverse().map((h) => (
            <div key={h.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 4px", borderBottom: "1px solid #E9DFC4" }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: h.type === "vente" ? "#F3DFDA" : "#E4EEE7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {h.type === "vente" ? (
                  <ShoppingBag size={15} color="#A8402E" />
                ) : (
                  <CheckCircle2 size={15} color="#3F7D5C" />
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13.5, color: "#1B2A4A", fontWeight: 500 }}>
                  {h.type === "vente" ? h.product : "Remboursement"}
                </div>
                <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11.5, color: "#8A7A57" }}>
                  {h.type === "vente" ? `${h.date} · échéance ${h.due}` : h.date}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: h.type === "vente" ? "#A8402E" : "#3F7D5C",
                }}
              >
                {h.type === "vente" ? "+" : "-"}
                {fmt(h.amount)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewSaleScreen({ client, onCancel, onSubmit }) {
  const [amount, setAmount] = useState("");
  const [product, setProduct] = useState("");
  const [due, setDue] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!amount || Number(amount) <= 0) return setError("Entrez un montant valide");
    if (!product.trim()) return setError("Indiquez le produit ou service");
    if (!due) return setError("Choisissez une date d'échéance");
    setError("");
    onSubmit({ amount: Number(amount), product, due });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar title="Nouvelle vente à crédit" onBack={onCancel} />
      <div style={{ overflowY: "auto", flex: 1, padding: "18px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, background: "#FFFDF8", border: "1px solid #E3D5B4", borderRadius: 12, padding: "10px 12px" }}>
          <Avatar initials={client.initials} size={36} />
          <div>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14, color: "#1B2A4A" }}>{client.name}</div>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11.5, color: "#8A7A57" }}>{client.quartier}</div>
          </div>
        </div>

        <FieldLabel>Montant du crédit</FieldLabel>
        <TextInput value={amount} onChange={setAmount} placeholder="5000" type="number" suffix="FCFA" />

        <FieldLabel>Produit ou service</FieldLabel>
        <TextInput value={product} onChange={setProduct} placeholder="Riz, savon, recharges..." />

        <FieldLabel>Date d'échéance</FieldLabel>
        <TextInput value={due} onChange={setDue} placeholder="ex : 10 septembre" />

        {error && <div style={{ color: "#A8402E", fontSize: 12.5, fontFamily: "'IBM Plex Sans', sans-serif", marginTop: 4 }}>{error}</div>}

        <button onClick={submit} style={primaryBtnStyle}>
          Enregistrer la vente
        </button>
      </div>
    </div>
  );
}

function NewRepaymentScreen({ client, onCancel, onSubmit }) {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const bal = balanceOf(client);

  const submit = () => {
    if (!amount || Number(amount) <= 0) return setError("Entrez un montant valide");
    setError("");
    onSubmit({ amount: Number(amount) });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar title="Enregistrer un remboursement" onBack={onCancel} />
      <div style={{ overflowY: "auto", flex: 1, padding: "18px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, background: "#FFFDF8", border: "1px solid #E3D5B4", borderRadius: 12, padding: "10px 12px" }}>
          <Avatar initials={client.initials} size={36} />
          <div>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14, color: "#1B2A4A" }}>{client.name}</div>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11.5, color: "#8A7A57" }}>
              Solde actuel : {fmt(bal)}
            </div>
          </div>
        </div>

        <FieldLabel>Montant reçu</FieldLabel>
        <TextInput value={amount} onChange={setAmount} placeholder="2000" type="number" suffix="FCFA" />

        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          {[Math.round(bal / 2), bal].filter((v) => v > 0).map((v) => (
            <button
              key={v}
              onClick={() => setAmount(String(v))}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 12.5,
                padding: "6px 12px",
                borderRadius: 20,
                border: "1px solid #E3D5B4",
                background: "#FFFDF8",
                color: "#1B2A4A",
                cursor: "pointer",
              }}
            >
              {fmt(v)}
            </button>
          ))}
        </div>

        {error && <div style={{ color: "#A8402E", fontSize: 12.5, fontFamily: "'IBM Plex Sans', sans-serif", marginTop: 10 }}>{error}</div>}

        <button onClick={submit} style={{ ...primaryBtnStyle, background: "#3F7D5C" }}>
          Enregistrer le remboursement
        </button>
      </div>
    </div>
  );
}

function NewClientScreen({ onCancel, onSubmit }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quartier, setQuartier] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!name.trim()) return setError("Entrez le nom du client");
    if (!phone.trim()) return setError("Entrez un numéro de téléphone");
    setError("");
    onSubmit({ name, phone, quartier });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar title="Nouveau client" onBack={onCancel} />
      <div style={{ overflowY: "auto", flex: 1, padding: "18px 16px" }}>
        <FieldLabel>Nom complet</FieldLabel>
        <TextInput value={name} onChange={setName} placeholder="Nom et prénom" />

        <FieldLabel>Téléphone</FieldLabel>
        <TextInput value={phone} onChange={setPhone} placeholder="6XX XX XX XX" type="tel" />

        <FieldLabel>Quartier (optionnel)</FieldLabel>
        <TextInput value={quartier} onChange={setQuartier} placeholder="ex : Mokolo" />

        {error && <div style={{ color: "#A8402E", fontSize: 12.5, fontFamily: "'IBM Plex Sans', sans-serif", marginTop: 4 }}>{error}</div>}

        <button onClick={submit} style={primaryBtnStyle}>
          Ajouter le client
        </button>
      </div>
    </div>
  );
}

function RemindersScreen({ reminders }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar title="Rappels envoyés" />
      <div style={{ overflowY: "auto", flex: 1, padding: "8px 16px 90px" }}>
        {reminders.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "#8A7A57", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13 }}>
            Aucun rappel envoyé pour l'instant.
          </div>
        )}
        {reminders.map((r) => (
          <div key={r.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 4px", borderBottom: "1px solid #E9DFC4" }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "#F3E8D2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MessageCircle size={16} color="#9C6B1F" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13.5, fontWeight: 500, color: "#1B2A4A" }}>
                {r.client}
              </div>
              <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11.5, color: "#8A7A57" }}>
                {r.stage} &middot; {r.date}
              </div>
            </div>
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11, color: "#3F7D5C", fontWeight: 600 }}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen() {
  const rows = [
    { label: "Nom de la boutique", value: "Chez Marguerite" },
    { label: "Téléphone", value: "677 00 00 00" },
    { label: "Formule", value: "Essai gratuit — 14 jours restants" },
    { label: "SMS de rappel", value: "Activés" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar title="Profil" />
      <div style={{ overflowY: "auto", flex: 1, padding: "20px 16px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 22 }}>
          <Avatar initials="MB" size={56} />
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 17, color: "#1B2A4A", marginTop: 10 }}>
            Chez Marguerite
          </div>
        </div>
        <div style={{ background: "#FFFDF8", border: "1px solid #E3D5B4", borderRadius: 14, overflow: "hidden" }}>
          {rows.map((r, i) => (
            <div
              key={r.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "13px 16px",
                borderBottom: i < rows.length - 1 ? "1px solid #E9DFC4" : "none",
              }}
            >
              <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: "#8A7A57" }}>{r.label}</span>
              <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: "#1B2A4A", fontWeight: 500 }}>{r.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12.5, fontWeight: 600, color: "#1B2A4A", marginBottom: 6, marginTop: 16 }}>
      {children}
    </div>
  );
}

function TextInput({ value, onChange, placeholder, type = "text", suffix }) {
  return (
    <div style={{ display: "flex", alignItems: "center", border: "1px solid #E3D5B4", borderRadius: 10, background: "#FFFDF8", padding: "0 12px" }}>
      <input
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
          padding: "11px 0",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 14,
          color: "#1B2A4A",
          width: "100%",
        }}
      />
      {suffix && (
        <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, color: "#8A7A57" }}>{suffix}</span>
      )}
    </div>
  );
}

const primaryBtnStyle = {
  width: "100%",
  marginTop: 26,
  padding: "13px 0",
  background: "#1B2A4A",
  color: "#F3E9D3",
  border: "none",
  borderRadius: 12,
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontWeight: 600,
  fontSize: 14.5,
  cursor: "pointer",
};

function BottomNav({ active, onNav, onQuickAdd }) {
  const items = [
    { key: "dashboard", icon: Home, label: "Accueil" },
    { key: "clients", icon: Users, label: "Clients" },
    { key: "quickadd", icon: Plus, label: "" },
    { key: "reminders", icon: Bell, label: "Rappels" },
    { key: "profile", icon: User, label: "Profil" },
  ];
  return (
    <div
      style={{
        display: "flex",
        borderTop: "1px solid #E3D5B4",
        background: "#F3E9D3",
        padding: "8px 8px 10px",
      }}
    >
      {items.map((it) => {
        const Icon = it.icon;
        if (it.key === "quickadd") {
          return (
            <div key={it.key} style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <button
                onClick={onQuickAdd}
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: "#C97A3D",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFDF8",
                  cursor: "pointer",
                  marginTop: -18,
                  boxShadow: "0 2px 6px rgba(27,42,74,0.25)",
                }}
              >
                <Icon size={22} />
              </button>
            </div>
          );
        }
        const isActive = active === it.key;
        return (
          <button
            key={it.key}
            onClick={() => onNav(it.key)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: isActive ? "#1B2A4A" : "#B4A87F",
            }}
          >
            <Icon size={20} strokeWidth={isActive ? 2.3 : 2} />
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 10.5, fontWeight: isActive ? 600 : 400 }}>
              {it.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function QuickAddSheet({ onClose, onNewClient, onNewSaleExisting }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(27,42,74,0.45)",
        display: "flex",
        alignItems: "flex-end",
        zIndex: 20,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          background: "#F3E9D3",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: "10px 16px 28px",
        }}
      >
        <div style={{ width: 36, height: 4, background: "#D6C49A", borderRadius: 4, margin: "6px auto 16px" }} />
        <button onClick={onNewSaleExisting} style={sheetBtnStyle}>
          <div style={sheetIconWrap("#F3DFDA")}>
            <ReceiptText size={18} color="#A8402E" />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={sheetBtnTitle}>Vente à crédit</div>
            <div style={sheetBtnSub}>Pour un client déjà enregistré</div>
          </div>
          <ChevronRight size={16} color="#C9B98C" style={{ marginLeft: "auto" }} />
        </button>
        <button onClick={onNewClient} style={sheetBtnStyle}>
          <div style={sheetIconWrap("#E4EEE7")}>
            <UserPlus size={18} color="#3F7D5C" />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={sheetBtnTitle}>Nouveau client</div>
            <div style={sheetBtnSub}>Ajouter quelqu'un à ton carnet</div>
          </div>
          <ChevronRight size={16} color="#C9B98C" style={{ marginLeft: "auto" }} />
        </button>
      </div>
    </div>
  );
}

const sheetBtnStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "12px 10px",
  background: "#FFFDF8",
  border: "1px solid #E3D5B4",
  borderRadius: 14,
  marginBottom: 10,
  cursor: "pointer",
};
const sheetBtnTitle = { fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14, color: "#1B2A4A" };
const sheetBtnSub = { fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11.5, color: "#8A7A57" };
function sheetIconWrap(bg) {
  return { width: 36, height: 36, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 };
}

function PickClientSheet({ clients, onClose, onPick }) {
  return (
    <div
      style={{ position: "absolute", inset: 0, background: "rgba(27,42,74,0.45)", display: "flex", alignItems: "flex-end", zIndex: 20 }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxHeight: "70%", background: "#F3E9D3", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: "10px 16px 20px", display: "flex", flexDirection: "column" }}
      >
        <div style={{ width: 36, height: 4, background: "#D6C49A", borderRadius: 4, margin: "6px auto 14px" }} />
        <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 15, color: "#1B2A4A", marginBottom: 10 }}>
          Choisir un client
        </div>
        <div style={{ overflowY: "auto" }}>
          {clients.map((c) => (
            <button
              key={c.id}
              onClick={() => onPick(c.id)}
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "10px 6px", background: "none", border: "none", borderBottom: "1px solid #E9DFC4", cursor: "pointer", textAlign: "left" }}
            >
              <Avatar initials={c.initials} size={32} />
              <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13.5, color: "#1B2A4A" }}>{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Toast({ message }) {
  if (!message) return null;
  return (
    <div
      style={{
        position: "absolute",
        bottom: 84,
        left: 16,
        right: 16,
        background: "#1B2A4A",
        color: "#F3E9D3",
        padding: "11px 16px",
        borderRadius: 10,
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: 13,
        display: "flex",
        alignItems: "center",
        gap: 8,
        zIndex: 30,
      }}
    >
      <CheckCircle2 size={16} />
      {message}
    </div>
  );
}

export default function AppPro() {
  const [clients, setClients] = useState(initialClients);
  const [reminders, setReminders] = useState(initialReminders);
  const [screen, setScreen] = useState("dashboard");
  const [selectedId, setSelectedId] = useState(null);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [showPickClient, setShowPickClient] = useState(false);
  const [toast, setToast] = useState("");
  const nextClientId = useRef(100);
  const nextHistId = useRef(100);
  const nextReminderId = useRef(100);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  const selectedClient = clients.find((c) => c.id === selectedId);

  const openClient = (id) => {
    setSelectedId(id);
    setScreen("clientDetail");
  };

  const handleNav = (key) => {
    setSelectedId(null);
    setScreen(key);
  };

  const addSale = ({ amount, product, due }) => {
    setClients((prev) =>
      prev.map((c) =>
        c.id === selectedId
          ? {
            ...c,
            history: [
              ...c.history,
              { id: "h" + nextHistId.current++, type: "vente", amount, product, date: "29 août", due, overdue: false },
            ],
          }
          : c
      )
    );
    setScreen("clientDetail");
    setToast("Vente à crédit enregistrée");
  };

  const addRepayment = ({ amount }) => {
    setClients((prev) =>
      prev.map((c) =>
        c.id === selectedId
          ? { ...c, history: [...c.history, { id: "h" + nextHistId.current++, type: "remboursement", amount, date: "29 août" }] }
          : c
      )
    );
    setScreen("clientDetail");
    setToast("Remboursement enregistré");
  };

  const addClient = ({ name, phone, quartier }) => {
    const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    const id = nextClientId.current++;
    setClients((prev) => [...prev, { id, name, phone, quartier: quartier || "—", initials, history: [] }]);
    setSelectedId(id);
    setScreen("clientDetail");
    setToast("Client ajouté");
  };

  const sendReminder = () => {
    if (!selectedClient) return;
    setReminders((prev) => [
      { id: "r" + nextReminderId.current++, client: selectedClient.name, date: "29 août, à l'instant", stage: "Rappel", status: "Envoyé" },
      ...prev,
    ]);
    setToast(`Rappel SMS envoyé à ${selectedClient.name.split(" ")[0]}`);
  };

  const resetDemo = () => {
    setClients(initialClients);
    setReminders(initialReminders);
    setScreen("dashboard");
    setSelectedId(null);
    setToast("");
  };

  let content;
  if (screen === "dashboard") content = <DashboardScreen clients={clients} onOpenClient={openClient} />;
  else if (screen === "clients") content = <ClientsScreen clients={clients} onOpenClient={openClient} />;
  else if (screen === "clientDetail" && selectedClient)
    content = (
      <ClientDetailScreen
        client={selectedClient}
        onBack={() => setScreen(clients.length ? "clients" : "dashboard")}
        onNewSale={() => setScreen("newSale")}
        onNewRepayment={() => setScreen("newRepayment")}
        onRemind={sendReminder}
      />
    );
  else if (screen === "newSale" && selectedClient)
    content = <NewSaleScreen client={selectedClient} onCancel={() => setScreen("clientDetail")} onSubmit={addSale} />;
  else if (screen === "newRepayment" && selectedClient)
    content = <NewRepaymentScreen client={selectedClient} onCancel={() => setScreen("clientDetail")} onSubmit={addRepayment} />;
  else if (screen === "newClient")
    content = <NewClientScreen onCancel={() => setScreen("dashboard")} onSubmit={addClient} />;
  else if (screen === "reminders") content = <RemindersScreen reminders={reminders} />;
  else if (screen === "profile") content = <ProfileScreen />;
  else content = <DashboardScreen clients={clients} onOpenClient={openClient} />;

  const navActive = ["dashboard", "clients", "reminders", "profile"].includes(screen) ? screen : null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 12px 12px",
        background: "#EFE6D2",
        minHeight: 760,
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        input::placeholder { color: #B4A87F; }
        button { font-family: inherit; }
      `}</style>

      <div style={{ marginBottom: 14, textAlign: "center" }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 15, color: "#1B2A4A" }}>
          Kaso — prototype cliquable
        </div>
        <button
          onClick={resetDemo}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            marginTop: 4,
            background: "none",
            border: "none",
            color: "#8A7A57",
            fontSize: 11.5,
            cursor: "pointer",
          }}
        >
          <RotateCcw size={12} /> Réinitialiser la démo
        </button>
      </div>

      <div
        style={{
          position: "relative",
          width: 375,
          maxWidth: "100%",
          height: 720,
          background: "#F3E9D3",
          borderRadius: 32,
          border: "8px solid #1B2A4A",
          overflow: "hidden",
          boxShadow: "0 12px 30px rgba(27,42,74,0.25)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 20px 4px",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            color: "#1B2A4A",
            fontWeight: 600,
          }}
        >
          <span>9:41</span>
          <span>●●● 4G 100%</span>
        </div>
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>{content}</div>
        {navActive !== null && screen !== "clientDetail" && (
          <BottomNav active={navActive} onNav={handleNav} onQuickAdd={() => setShowQuickAdd(true)} />
        )}
        {["clientDetail", "newSale", "newRepayment", "newClient"].includes(screen) && (
          <BottomNav active={null} onNav={handleNav} onQuickAdd={() => setShowQuickAdd(true)} />
        )}

        {showQuickAdd && (
          <QuickAddSheet
            onClose={() => setShowQuickAdd(false)}
            onNewClient={() => {
              setShowQuickAdd(false);
              setScreen("newClient");
            }}
            onNewSaleExisting={() => {
              setShowQuickAdd(false);
              setShowPickClient(true);
            }}
          />
        )}
        {showPickClient && (
          <PickClientSheet
            clients={clients}
            onClose={() => setShowPickClient(false)}
            onPick={(id) => {
              setSelectedId(id);
              setShowPickClient(false);
              setScreen("newSale");
            }}
          />
        )}
        <Toast message={toast} />
      </div>
    </div>
  );
}
