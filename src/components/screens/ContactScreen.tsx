import React, { useState } from 'react';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'story-lead',
    state: 'Madhya Pradesh',
    message: '',
    confidential: true,
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        topic: 'story-lead',
        state: 'Madhya Pradesh',
        message: '',
        confidential: true,
      });
    }, 4000);
  };

  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Jammu & Kashmir / Ladakh',
    'Delhi NCR',
  ];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: Editorial Header */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#eee0d9] px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#b3401e]" />
              <span className="font-['Inter'] text-xs uppercase font-semibold text-[#6c625d]">
                Direct Newsdesk Channel
              </span>
            </div>
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1b1b] tracking-tight">
              Get in Touch With Keep It Real
            </h1>
            <p className="font-['Inter'] text-base sm:text-lg text-[#58423b] max-w-2xl leading-relaxed">
              Whether you have a story lead from a remote village, an ethical collaboration inquiry,
              or a press request, we listen intently.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Contact Channels Grid */}
      <section className="w-full bg-[#f6f3f2] py-12 px-5 md:px-8 lg:px-12 border-y border-[#dfc0b7]/40">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dfc0b7]/40 space-y-2">
              <span className="material-symbols-outlined text-[#b3401e] text-[26px]">
                campaign
              </span>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b]">
                Story Leads &amp; Tips
              </h3>
              <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                Nominate unsung changemakers or community crises:
              </p>
              <a
                href="mailto:leads@keepitreal.in"
                className="font-['Inter'] text-xs font-bold text-[#b3401e] hover:underline block pt-1"
              >
                leads@keepitreal.in
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dfc0b7]/40 space-y-2">
              <span className="material-symbols-outlined text-[#b3401e] text-[26px]">
                newspaper
              </span>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b]">
                Press &amp; Media Desk
              </h3>
              <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                Interviews, broadcast clearances, and film rights:
              </p>
              <a
                href="mailto:press@keepitreal.in"
                className="font-['Inter'] text-xs font-bold text-[#b3401e] hover:underline block pt-1"
              >
                press@keepitreal.in
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dfc0b7]/40 space-y-2">
              <span className="material-symbols-outlined text-[#b3401e] text-[26px]">
                school
              </span>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b]">
                Fellowships &amp; Grants
              </h3>
              <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                Regional filmmaker grants &amp; cohort applications:
              </p>
              <a
                href="mailto:fellowship@keepitreal.in"
                className="font-['Inter'] text-xs font-bold text-[#b3401e] hover:underline block pt-1"
              >
                fellowship@keepitreal.in
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dfc0b7]/40 space-y-2">
              <span className="material-symbols-outlined text-[#b3401e] text-[26px]">
                home_pin
              </span>
              <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#1c1b1b]">
                Newsdesk &amp; Archive
              </h3>
              <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
                Vasant Kunj Institutional Area, New Delhi, India 110070
              </p>
              <span className="font-['Inter'] text-xs text-[#665c57] block pt-1">
                Mon - Fri, 09:00 - 18:00 IST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Direct Transmission Form */}
      <section className="w-full bg-[#fcf9f8] py-16 px-5 md:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-[#dfc0b7]/50">
            <div className="mb-8 space-y-2">
              <span className="font-['Inter'] text-xs font-bold uppercase text-[#b3401e] tracking-widest">
                Transmit to Editors
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1c1b1b]">
                Send an Encrypted Field Message
              </h2>
              <p className="font-['Inter'] text-sm text-[#58423b]">
                All transmissions are handled confidentially by our core editorial staff.
              </p>
            </div>

            {sent ? (
              <div className="p-8 bg-[#eee0d9] rounded-2xl text-center space-y-3">
                <span className="material-symbols-outlined text-4xl text-[#b3401e]">
                  mark_email_read
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1c1b1b]">
                  Message Dispatched
                </h3>
                <p className="font-['Inter'] text-sm text-[#58423b]">
                  Your message has been received by our New Delhi field bureau. We will review it
                  with care.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-['Inter'] text-xs font-bold text-[#1c1b1b] uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Kumar"
                      className="w-full bg-[#f6f3f2] text-[#1c1b1b] font-['Inter'] text-sm p-3.5 rounded-lg border border-[#dfc0b7] focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                    />
                  </div>

                  <div>
                    <label className="block font-['Inter'] text-xs font-bold text-[#1c1b1b] uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. anand@domain.com"
                      className="w-full bg-[#f6f3f2] text-[#1c1b1b] font-['Inter'] text-sm p-3.5 rounded-lg border border-[#dfc0b7] focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-['Inter'] text-xs font-bold text-[#1c1b1b] uppercase mb-2">
                      Topic / Category
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-[#f6f3f2] text-[#1c1b1b] font-['Inter'] text-sm p-3.5 rounded-lg border border-[#dfc0b7] focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                    >
                      <option value="story-lead">Grassroots Story Lead</option>
                      <option value="press">Press &amp; Media Inquiry</option>
                      <option value="fellowship">Filmmaker Fellowship</option>
                      <option value="csr">Ethical CSR Partnership</option>
                      <option value="other">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-['Inter'] text-xs font-bold text-[#1c1b1b] uppercase mb-2">
                      Location State
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-[#f6f3f2] text-[#1c1b1b] font-['Inter'] text-sm p-3.5 rounded-lg border border-[#dfc0b7] focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                    >
                      {indianStates.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-['Inter'] text-xs font-bold text-[#1c1b1b] uppercase mb-2">
                    Message / Story Particulars *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide clear details regarding who, where, what challenges they face, and any links to reference material or photos."
                    className="w-full bg-[#f6f3f2] text-[#1c1b1b] font-['Inter'] text-sm p-3.5 rounded-lg border border-[#dfc0b7] focus:outline-none focus:ring-2 focus:ring-[#b3401e]"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="confidential-check"
                    checked={formData.confidential}
                    onChange={(e) =>
                      setFormData({ ...formData, confidential: e.target.checked })
                    }
                    className="w-4 h-4 text-[#b3401e] rounded focus:ring-[#b3401e]"
                  />
                  <label htmlFor="confidential-check" className="font-['Inter'] text-xs text-[#58423b]">
                    Protect my identity under journalistic confidentiality covenants.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#b3401e] hover:bg-[#922906] text-white font-['Inter'] text-sm font-semibold px-8 py-3.5 rounded-lg transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  Send Transmission
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: Whistleblower Protection Covenant */}
      <section className="w-full bg-[#f6f3f2] py-12 px-5 md:px-8 lg:px-12 border-t border-[#dfc0b7]/40">
        <div className="max-w-3xl mx-auto flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#dfc0b7]/40">
          <span className="material-symbols-outlined text-[32px] text-[#b3401e] shrink-0 mt-1">
            security
          </span>
          <div className="space-y-1">
            <h4 className="font-['Playfair_Display'] text-base font-bold text-[#1c1b1b]">
              Source Protection &amp; Whistleblower Safety
            </h4>
            <p className="font-['Inter'] text-xs text-[#58423b] leading-relaxed">
              If your story involves sensitive ecological crime, corporate malfeasance, or risk to
              vulnerable communities, please request our PGP encryption key or reach out directly
              via encrypted Signal messaging. We never disclose source identities without written
              consent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
