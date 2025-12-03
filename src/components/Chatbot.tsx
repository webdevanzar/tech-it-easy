import { useState } from "react";
import { MessageCircle, X, Loader2 } from "lucide-react";

const WelcomeMessage = () => (
  <div className="text-center py-8 px-4 text-muted-foreground/70">
    <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
    <h3 className="text-lg font-medium mb-2">Welcome to Tech It Easy Assistant</h3>
    <p className="text-sm max-w-xs mx-auto">
      Ask me anything about our team, projects, or services. I'm here to help!
    </p>
  </div>
);

export const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_API_KEY as string | undefined;
      if (!apiKey) {
        throw new Error("VITE_API_KEY is not defined");
      }

      const systemPrompt = `You are a helpful assistant for the Tech It Easy website. Your goal is to provide accurate information about our team, projects, and services in a friendly and professional manner.

Key areas you can discuss:
- Team members and their roles
- Our projects and case studies
- Technology stack and expertise
- Company achievements and milestones
- How to contact us or start a project

While your main focus is on Tech It Easy, you can also answer general questions about web development, design, and technology to be helpful. Only refuse to answer if the question is completely unrelated or inappropriate.

Current team members:
- Muhammed Anzarshah (Full-Stack, Team Lead)
- Rizwan Hamza K (Frontend & UI)
- Shameem Shah (UI/UX & Product)
- Krishna Prasad PR (AI/ML & Backend)

Notable projects:
- CloudSync Dashboard
- ShopFlow Mobile
- AI Assistant Pro

Tech stack: React, TypeScript, Node.js, MongoDB, PostgreSQL, AWS, Tailwind, Framer Motion, Next.js.

Contact: anzarsha3240@gmail.com
Location: Remote, available worldwide.

User message: ${input}`;

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
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
                    text: systemPrompt,
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
        "Sorry, I couldn't understand that. Could you please rephrase your question?";

      // Streaming typing effect: append bot message gradually
      setMessages((prev) => [...prev, { role: "bot", text: "" }]);
      for (let i = 0; i < botReply.length; i++) {
        await new Promise((r) => setTimeout(r, 8));
        setMessages((prev) => {
          const updated = [...prev];
          for (let j = updated.length - 1; j >= 0; j--) {
            if (updated[j].role === "bot" && !updated[j].text.endsWith(botReply[i])) {
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
        { role: "bot", text: "I'm having trouble connecting right now. Please try again later." },
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
              <MessageCircle size={18} /> Tech It Easy Assistant
            </span>
            <button 
              className="rounded-sm hover:bg-primary/20 p-1 transition-colors" 
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="h-[60vh] max-h-[70vh] overflow-y-auto p-3 space-y-2 bg-background">
            {messages.length === 0 ? (
              <WelcomeMessage />
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "ml-auto bg-primary/10 border border-border text-foreground"
                      : "mr-auto bg-muted border border-border text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
            {loading && (
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Thinking...</span>
              </div>
            )}
          </div>

          <div className="border-t p-2 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                placeholder="Ask me anything about Tech It Easy..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="min-w-0 flex-1 h-10 px-4 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};