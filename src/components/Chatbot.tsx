import { useState } from "react";
import { MessageCircle, X, Loader2 } from "lucide-react";

export const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCICuhyDeExdYw9ejskQ9JPNVvFPv2lNeE",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are the Tech It Easy team assistant. Answer ONLY questions about Tech It Easy, including: team members and roles, our projects, our technology stack, achievements, and how to contact us. If the user asks anything unrelated to the team or our work, reply exactly with: "I'm sorry, I can only assist with team-related questions."\n\nContext (use for factual answers):\n- Team: Muhammed Anzarshah (Full-Stack, Team Lead), Rizwan Hamza K (Frontend & UI), Shameem Shah (UI/UX & Product), Krishna Prasad PR (AI/ML & Backend).\n- Projects: CloudSync Dashboard, ShopFlow Mobile, AI Assistant Pro.\n- Tech stack: React, TypeScript, Node.js, MongoDB, PostgreSQL, AWS, Tailwind, Framer Motion, Next.js.\n- Achievements: 20+ projects, 5 hackathons, 15+ clients, 1K+ GitHub stars.\n- Contact: anzarsha3240@gmail.com.\n- Location: Remote, available worldwide.\n\nUser message: ${input}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();
      const botReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn’t understand that.";
      // Streaming typing effect: append bot message gradually
      setMessages((prev) => [...prev, { role: "bot", text: "" }]);
      for (let i = 0; i < botReply.length; i++) {
        // small delay for typing effect
        await new Promise((r) => setTimeout(r, 8));
        setMessages((prev) => {
          const updated = [...prev];
          // find last bot message and append next char
          for (let j = updated.length - 1; j >= 0; j--) {
            if (updated[j].role === "bot") {
              updated[j] = {
                ...updated[j],
                text: updated[j].text + botReply[i],
              };
              break;
            }
          }
          return updated;
        });
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed md:bottom-6 bottom-8 left-6 z-[60]">
      {/* Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-primary-foreground rounded-full p-4 shadow-xl hover:bg-primary/90 transition-transform duration-200 border border-border hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Interface */}
      {open && (
        <div className="w-[88vw] max-w-sm md:max-w-md lg:max-w-lg bg-background rounded-2xl shadow-2xl border border-border overflow-hidden animate-in fade-in-0 zoom-in-95">
          <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-3 font-semibold">
            <span className="flex items-center gap-2">
              <MessageCircle size={18} /> Ask about our team
            </span>
            <button className="rounded-sm hover:bg-green-300 transition-transform duration-200 hover:scale-105" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="h-[60vh] max-h-[70vh] overflow-y-auto p-3 space-y-2 bg-background">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] p-2 rounded-lg text-sm whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "ml-auto bg-primary/10 border border-border text-foreground"
                    : "mr-auto bg-muted border border-border text-foreground"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Thinking…</span>
              </div>
            )}
          </div>

          <div className="border-t p-2 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center gap-1 sm:gap-2">
              <input
                type="text"
                value={input}
                placeholder="Ask about our team..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="min-w-0 flex-1 h-10 px-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <button
                onClick={sendMessage}
                className="shrink-0 inline-flex items-center justify-center gap-2 h-10 px-3 sm:px-4 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 whitespace-nowrap"
                disabled={loading}
                aria-label="Send message"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
