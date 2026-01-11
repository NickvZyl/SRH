# St Raphael Health - Website Specification

**Version:** 1.0  
**Last Updated:** January 2026  
**Purpose:** Complete website specification for development reference

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Design System](#design-system)
3. [Site Structure & Navigation](#site-structure--navigation)
4. [Page Specifications](#page-specifications)
5. [Component Specifications](#component-specifications)
6. [Technical Requirements](#technical-requirements)
7. [Content Guidelines](#content-guidelines)
8. [Asset Requirements](#asset-requirements)

---

## Project Overview

### Purpose
Create a trust-building platform for St Raphael Health that establishes credibility, calm authority, and operational seriousness for high-stakes healthcare decision-makers.

**This is NOT a marketing website** — it's a platform for hospital leaders, boards, municipalities, physicians, and investors.

### Target Audience
- Hospital CEOs and Leadership Teams
- Hospital Boards and Municipalities
- Healthcare Investors and Lenders
- Physician Groups and Clinical Leaders
- Age demographic: 40+ executive audience

### Core Brand Principles
- **Reassure first** → Inform clearly → Invite conversation
- Operator-led, not consultant-driven
- Hands-on execution, not theory
- Built for high-pressure healthcare environments

### Design Goal
After 30 seconds on site, visitors should think:
> "These people have been here before. They understand pressure. They move calmly. And they know how to fix this."

---

## Design System

### Color Palette

#### Primary Brand Colors
```css
--gold-warm-ochre: #CBA85C;  /* Use sparingly for emphasis, dividers, icons, key metrics */
--soft-gold: #EDBD56;        /* Secondary highlights, hover states, subtle accents */
```

#### Support/Authority Colors
```css
--deep-red: #C2322F;         /* Rarely; case study metrics, critical emphasis only */
--dark-burgundy: #801B1F;    /* Optional depth for section headers or backgrounds */
```

#### Neutrals (Primary Canvas)
```css
--black: #000000;            /* Headlines, primary text */
--warm-stone: #DBD5CA;       /* Section backgrounds, soft contrast blocks */
--white: #FFFFFF;            /* Primary background */
```

**Important:** Site should skew light, warm, and calm — not dark or aggressive.

---

### Typography

#### Headlines
```css
font-family: 'Lounge', serif;
font-weight: 400; /* Regular */
```
- Use for: Page headlines, section headers
- Style: Editorial spacing, generous line height

#### Body Copy & Subheadings
```css
font-family: 'Montserrat', sans-serif;
font-weight: 300; /* Light */
font-weight: 400; /* Regular */
font-weight: 600; /* Semibold */
font-weight: 700; /* Bold */
```
- Highly readable
- Optimized for 40+ executive audience

#### Typography Rules
- Avoid condensed or stylized display fonts
- Minimize bold overuse
- Editorial line-height and spacing

---

### Layout & UX Principles

#### Overall Layout
- Clean, editorial structure
- Generous white space
- Strong typography hierarchy
- Content-first design

#### Motion & Interaction
**Allowed:**
- Soft fades
- Gentle parallax
- Light hover states

**Prohibited:**
- Loud transitions
- Gimmicks
- Aggressive animations

#### Formatting Guidelines
- Avoid over-formatting with excessive bold, headers, lists, bullets
- Use minimum formatting for clarity and readability
- Default to prose and paragraphs for reports/documents
- Use lists/bullets ONLY when explicitly requested or essential
- If using bullets: minimum 1-2 sentences per point (CommonMark)

---

### Imagery Guidelines

#### Use Real, Unstaged Visuals
- Hospital exteriors (daylight preferred)
- Natural-light corridors
- Clinicians in action (non-trauma)
- Leadership walking floors
- Diagnostics and operational workflows
- Community-focused environments

#### Must Feel
- Real
- Calm
- Grounded
- Professional

#### Avoid
- Emergency scenes
- Trauma or crisis imagery
- Posed stock photos
- Aggressive "growth" or finance visuals
- Over-edited or glossy stock imagery

---

## Site Structure & Navigation

### Global Navigation (Consistent Across All Pages)
1. Hospital Advisory
2. Our Approach
3. Case Studies
4. Team
5. Why Profit Matters
6. Physicians
7. Contact

**Requirements:**
- No dropdown clutter
- Clean, executive-level navigation
- Consistent placement on all pages

---

### URL Structure
```
/                          (Homepage)
/hospital-advisory         (Hospital Advisory)
/our-approach             (Our Approach)
/case-studies             (Case Studies)
/team                     (Team)
/why-profit-matters       (Why Profit Matters)
/physicians               (Physicians - TBD)
/contact                  (Contact)
/privacy-policy           (Privacy Policy)
/terms                    (Terms & Conditions)
/compliance               (Compliance)
```

---

### Global Footer (Identical Across All Pages)
- Privacy Policy (link)
- Terms & Conditions (link)
- Compliance (link)
- Contact Email: info@saintraphaelhealth.com

**Style:** Simple text links, minimal design

---

## Page Specifications

### 1. Homepage

#### Above-the-Fold: 50/50 Vertical Split
Full viewport height, split down the center

#### Left Panel - Hospitals

**Visual:**
- Calm hospital exterior or executive team in corridor
- Clean lighting, neutral tones
- No emergency imagery
- Slow parallax or subtle fade-in animation

**Content:**
```
Headline: For Hospitals

Primary Blurb: 
Hands-on turnaround advisory for distressed hospitals.

Secondary Blurb:
Operators working alongside operators to restore profitability in months, 
not years, while strengthening patient care and community outcomes.

Proof Line (small text):
200+ years of hospital operating and turnaround experience.

CTA Button: Enter Hospital Advisory →
```

**Button Style:** Solid, confident, slightly heavier weight

---

#### Right Panel - Physicians

**Visual:**
- Physician-led care environment
- Professional, composed, confident
- Focus on leadership, not procedures
- Slightly warmer tone than hospital side

**Content:**
```
Headline: For Physicians

Primary Blurb:
Strategic support for physician groups and clinical leaders.

Secondary Blurb:
Operational alignment, growth strategy, and systems support designed to 
let physicians focus on care while strengthening long-term sustainability.

Proof Line (small text):
Built by operators with deep healthcare and systems expertise.

CTA Button: Enter Physician Advisory →
```

**Button Style:** Outlined or lighter to visually distinguish paths

---

#### Center/Shared Elements

**Top Center (or subtle overlay):**
```
St Raphael Health
Advising healthcare organizations through challenge to strength.
```

**Center Divider:**
- Soft animated divider or gradient line between left/right
- Subtle motion on hover (no aggressive movement)

---

#### Below the Split - Contact Form Section

**Background:** Clean white

**Content:**
```
Section Headline: Not sure where you fit?

Subhead: 
Tell us a bit about your organization and we'll guide you to the right place.
```

**Form Fields:**
- Full Name (required)
- Email (required)
- Phone (required)
- Organization / Hospital Name (required)
- City / State (required)
- Reason for Contact (dropdown, optional)
- Message (textarea, required)

**Submit Button:** Contact Our Team

**Form Delivery:**
- To: info@saintraphaelhealth.com
- CC: Don

**Success Message:**
```
Thank you. A member of our operating team will be in touch shortly.
```

---

### 2. Hospital Advisory (Primary Landing Page)

#### Section 1: Hero - Authority + Immediate Proof

```
Headline:
We help distressed hospitals become profitable in months, not years.

Positioning Sentence:
We transform distressed Texas hospitals into profitable regional healthcare 
leaders, delivering exceptional patient care within their communities.

Subhead:
Our operating team with 200+ years of experience partners hands-on with Texas 
hospitals to restore profitability in under six months while delivering 
exceptional patient outcomes.
```

**Proof Strip (subtle animation):**
- $85M → $290M gross revenue, 19% profit margin
- $18M → $190M gross revenue, 12% profit margin
- $10M → $56M gross revenue, 32% profit margin
- _Small text:_ Documented hospital turnaround outcomes

**Primary CTA:** Speak With Our Operating Team →

---

#### Section 2: Who We Serve

```
Headline: Built for hospital environments under pressure.
```

**Hospitals & Operators:**
```
Hands-on operational leadership to stabilize performance and restore profitability.
Outcome: Daily patient census increased 75%.
```

**Municipalities & Hospital Boards:**
```
Preserve community access to care while restoring financial health.
Outcome: Reserves expanded by 150%.
```

**Investors & Lenders:**
```
Stabilized assets with improved margins and exit optionality.
Outcome: Negative margins converted to double-digit profitability.
```

---

#### Section 3: Our Approach (High-Level)

```
Headline: This is not consulting. This is execution.

Copy:
St Raphael Health embeds directly with hospital leadership teams to diagnose 
issues, drive operations, and deliver measurable results. We do not deliver 
reports and walk away. We stay accountable to outcomes.

Embedded Proof Callout:
"In only two years, emergency room visits increased 380%, surgical volume 
grew 300%, and inpatient census increased 14x."
```

_Note: Deeper detail lives on the "Our Approach" page._

---

#### Section 4: Why St Raphael Health Was Formed

```
St Raphael Health was formed when a group of hospital operators and M&A 
professionals partnered with a Houston-based hospital CEO to help save a 
270+ bed hospital operating under Chapter 11.

During that engagement, they uncovered a broader and deeply concerning reality. 
More than 60% of hospitals were operating in some level of distress, yet many 
could be stabilized quickly using a repeatable, operator-led framework focused 
on execution rather than theory.

They also discovered that many hospital owners wanted to sell or partner, but 
could not. Distressed operations meant little to no enterprise value, leaving 
communities, boards, and stakeholders with limited options.

St Raphael Health was created to address this gap—to restore hospitals to 
sustainable profitability first, protect patient care, and, where appropriate, 
help hospitals pursue strategic outcomes from a position of strength rather 
than distress.
```

---

#### Section 5: Our Operating Pillars (Snapshot)

```
Headline: Our Operating Pillars
```

**6-Column Snapshot (icons + short copy):**

1. **Cash Flow Acceleration**
   - Turn revenue into predictable, reliable cash.

2. **Cost Efficiency & Margin Improvement**
   - Create durable margin expansion across operations.

3. **Revenue Expansion**
   - Grow top-line revenue through smarter operations.

4. **Capital Structure Optimization**
   - Strengthen the financial foundation for resilience.

5. **Regulatory Compliance & Operational Integrity**
   - Reduce risk and ensure operational stability.

6. **Sale or Partnership (If Applicable)**
   - Position stabilized hospitals for strategic outcomes.

_Note: Detailed explanations live on supporting page or expand-on-scroll._

---

#### Section 6: Case Studies Preview

```
Section Header: Proven Hospital Turnarounds

Intro Line: 
Real-world outcomes achieved through hands-on operational leadership, not theory.
```

**Three-Card Preview:**

1. **BMC Hospitals | Greater Houston**
   - $85M → $290M revenue · 19% margin · ER +380% · Surgical +300%

2. **Emergency Hospital Systems | Northeast Houston**
   - $18M → $190M revenue · 12% margin · Profitability in 6 months

3. **Doctors Diagnostic Hospital | Cleveland, TX**
   - $10M → $56M revenue · 32% margin · $18M profit achieved

**Link:** View Full Case Studies →

---

#### Section 7: Micro Mission & Vision

```
Our Mission:
Restoring hospital profitability to protect patient care and strengthen 
the communities they serve.

Our Vision:
A resilient, profitable network of exceptionally run hospitals delivering 
long-term value to patients, operators, and communities.
```

_Optional line:_ Profit enables care, stability, and choice.

---

#### Section 8: Why Profit Matters (Teaser)

```
Headline: 
Why profitability is the foundation of every successful hospital.

Short Copy:
Profit is not the objective. It is the enabler of value, care, and 
operational stability.
```

**Link:** Explore Why Profit Matters →

---

#### Section 9: Primary CTA

```
Headline: If your hospital is under pressure, speed matters.

Subhead: Every month of delay reduces options. Early action creates leverage.

CTA: Speak With Our Operating Team →
```

---

#### Section 10: Contact Preview

```
CTA Line: Have a confidential conversation with our operating team.

Button: Contact Us →
```

_Note: Full form lives on dedicated Contact page._

---

### 3. Our Approach Page

#### On-Page Navigation (Anchor Links)
- How We Work
- Our Operating Pillars
- Execution Model
- What Makes Us Different

---

#### Page Headline

```
This is not consulting. This is execution.
```

---

#### Intro

```
St Raphael Health works alongside hospital leadership teams to stabilize 
operations, restore profitability, and create durable long-term value.

We do not advise from the sidelines. We embed directly, take responsibility 
for execution, and remain accountable for outcomes.

Our approach is built by operators, refined through real-world hospital 
turnarounds, and designed to move decisively in complex, high-pressure 
healthcare environments.
```

---

#### Section 1: How We Work

```
Subheadline: A disciplined, operator-led framework
```

**1. Rapid Diagnosis**

```
We begin by quickly identifying the operational and financial constraints 
preventing performance.

This includes:
- Cash flow and revenue cycle stress points
- Cost structures and margin leakage
- Service line performance
- Capital and balance sheet pressure
- Regulatory and operational risks

Our goal is clarity—fast.
```

**2. Hands-On Operational Execution**

```
Once priorities are clear, we move immediately into execution.

We work directly with hospital leadership and teams to:
- Drive operational decisions
- Implement changes on the ground
- Remove friction across people, process, and systems

We do not deliver reports and disappear. We stay involved until change is 
real and measurable.
```

**3. Profitability First**

```
Profitability is the foundation of every successful hospital outcome.

By restoring predictable cash flow and sustainable margins early, we:
- Stabilize day-to-day operations
- Reduce crisis management
- Create optionality for leadership

Profit enables better care, stronger teams, and long-term stability.
```

**4. Build for Sustainability**

```
Stabilization is not the finish line.

We ensure:
- Operational improvements are repeatable
- Teams are aligned and supported
- Systems and processes are institutionalized

The objective is a hospital that performs without constant intervention.
```

**5. Create Strategic Options**

```
Once operations are stable and profitability restored, leadership has choices.

Depending on objectives, we support:
- Long-term independent operation
- Strategic partnerships
- Sale or transaction at a materially improved valuation

Options only exist when operations are healthy.
```

---

#### Section 2: Our Operating Pillars

```
Subheadline: An integrated operating system, not standalone services

Our approach is executed through a proven, repeatable operating framework. 
Each pillar reinforces the others and is applied based on urgency and context.
```

**1. Cash Flow Acceleration**

```
Hospitals rarely fail due to lack of revenue. They fail because cash is 
delayed, trapped, or leaking through broken processes.

We rapidly convert earned revenue into usable cash by:
- Recovering aged receivables
- Tightening billing, coding, and collections cycles
- Improving payer responsiveness and escalation
- Addressing breakdowns in patient access and PFS

Cash flow is the fastest lever to restore control.
```

**2. Cost Efficiency & Margin Improvement**

```
Distressed hospitals often carry cost structures misaligned with actual 
operating volume.

We create durable margin expansion by:
- Eliminating unnecessary or misaligned spend
- Optimizing purchasing and supply chain agreements
- Renegotiating vendor and service contracts
- Right-sizing overhead without compromising care

This is about alignment, not indiscriminate cuts.
```

**3. Revenue Expansion**

```
Underperformance is often driven by underutilized capacity, not lack of demand.

We responsibly grow top-line revenue by:
- Strengthening provider networks
- Expanding or opening service lines aligned with community need
- Optimizing licensing and facility structures
- Ensuring full capture of services already delivered

Revenue growth supports reinvestment and long-term stability.
```

**4. Capital Structure Optimization**

```
Many hospitals are constrained by misaligned capital and restrictive financial 
structures.

We strengthen the financial foundation by:
- Right-sizing the balance sheet
- Aligning lenders, investors, and stakeholders
- Structuring capital to support recovery and growth
- Creating flexibility for refinancing or future transactions

Capital should support operations, not constrain them.
```

**5. Regulatory Compliance & Operational Integrity**

```
Operational distress often increases regulatory risk.

We ensure every clinical and administrative function meets required standards by:
- Addressing licensing and accreditation gaps
- Strengthening quality and safety frameworks
- Supporting survey readiness and audits
- Embedding compliance into daily operations

Operational integrity protects patients, staff, and leadership.
```

**6. Sale or Partnership Strategy (If Applicable)**

```
Strategic outcomes are pursued only once stability is restored.

Where appropriate, we:
- Evaluate strategic alternatives
- Support partnership or sale discussions
- Position hospitals for materially improved valuation
- Help leadership pursue outcomes from a position of strength

Optionality is created through execution, not assumption.
```

---

#### Section 3: Execution Model

```
Subheadline: A disciplined operating model designed for speed and stability

St Raphael Health operates using a structured execution model designed to 
stabilize hospitals quickly while building toward sustainable, long-term 
performance.

Every engagement follows the same core phases. The sequence may compress or 
overlap depending on urgency, but the discipline remains constant.
```

**Phase 1: Immediate Stabilization (0-30 Days)**

```
Objective: Stop financial and operational bleed. Restore control.

Focus Areas:
- Cash flow visibility and short-term liquidity
- Critical vendor and payroll stabilization
- Revenue cycle triage
- Immediate compliance or operational risks
- Leadership alignment and decision clarity

Outcome: 
The hospital moves from reactive crisis management to controlled operations.
```

**Phase 2: Performance Reset (30-90 Days)**

```
Objective: Restore predictable performance across core functions.

Focus Areas:
- Margin improvement and cost realignment
- Revenue cycle optimization
- Service line performance review
- Staffing and operational workflow stabilization
- Governance and reporting discipline

Outcome: 
The hospital operates with predictable cash flow, stabilized margins, and 
measurable performance improvements.
```

**Phase 3: Sustainable Operations (90-180 Days)**

```
Objective: Embed systems and teams that perform without constant intervention.

Focus Areas:
- Institutionalized processes and controls
- Leadership capability and accountability
- Compliance readiness and quality frameworks
- Capital alignment and balance sheet health

Outcome: 
The hospital performs sustainably with reduced dependency on crisis intervention.
```

**Phase 4: Strategic Optionality (Post-Stabilization)**

```
Objective: Create and evaluate long-term strategic choices.

Focus Areas:
- Independent growth planning
- Strategic partnerships
- Capital restructuring or refinancing
- Sale or transaction (if aligned with objectives)

Outcome: 
Leadership makes decisions from a position of strength, not distress.
```

---

#### Section 4: What Makes This Different

**Operators, Not Advisors**
```
Our team brings over 200 years of combined hospital operating, turnaround, 
and transaction experience. We have worked inside these environments and 
understand what works under pressure.
```

**Speed Without Chaos**
```
We move quickly, but not recklessly. Our framework prioritizes actions that 
matter most and avoids unnecessary disruption.
```

**Accountability to Outcomes**
```
We measure success by results, not recommendations. Performance improvement, 
margin restoration, and operational stability are the benchmarks.
```

---

#### Proof in Practice

```
"In only two years, emergency room visits increased 380%, surgical volume 
grew 300%, and inpatient census increased 14x."

These outcomes are the result of disciplined execution, not theory.
```

---

#### Who This Approach Is For

- Hospitals experiencing financial or operational distress
- Boards and municipalities seeking stability and accountability
- Investors and lenders requiring predictable performance
- Leadership teams who want partners, not consultants

---

#### Closing Section

```
Headline: If speed, accountability, and outcomes matter, our approach is built for you.

CTA: Speak With Our Operating Team →
```

---

### 4. Case Studies Page

#### Page Headline

```
Proven Hospital Turnarounds
```

---

#### Intro

```
These case studies reflect real-world outcomes achieved through hands-on 
operational execution. Every result below was delivered by experienced 
hospital operators working directly inside complex, distressed environments.
```

---

#### Case Study 1: BMC Hospitals

**Location:** Greater Houston  
**Profile:** Multi-facility surgical hospital system  
**Challenge:** Financial distress, declining volumes, operational instability

**Image:** [Hospital exterior - calm, professional]

**The Situation**
```
BMC Hospitals were operating under significant financial pressure, with 
declining margins, constrained cash flow, and limited capacity to invest 
in growth. Volumes were suppressed and the system lacked the operational 
leverage required to stabilize performance.
```

**Our Approach**
```
St Raphael Health embedded directly with leadership to stabilize operations, 
restore financial discipline, and execute targeted growth initiatives across 
service lines.
```

**The Results**
- Gross revenue growth from **$85M to $290M**
- Shift from negative margins to a **19% profit margin**
- Emergency room visits increased **380%**
- Surgical volume increased **300%**
- Inpatient census increased **14x**
- Healthcare workforce expanded to **290 FTEs**, strengthening community care delivery

---

#### Case Study 2: Emergency Hospital Systems (EHS)

**Location:** Northeast Houston  
**Profile:** Distressed hospital assets  
**Challenge:** Bankruptcy risk, unsustainable operations, community access at risk

**Image:** [Hospital exterior - calm, professional]

**The Situation**
```
Emergency Hospital Systems faced severe financial distress, with limited 
operational flexibility and mounting pressure on leadership and stakeholders. 
Without intervention, essential community healthcare access was at risk.
```

**Our Approach**
```
The focus was rapid operational stabilization, cash flow recovery, and margin 
restoration, executed alongside hospital leadership and clinical teams.
```

**The Results**
- Gross revenue growth from **$18M to $190M**
- Shift from negative margins to a **12% profit margin**
- Profitability restored within **six months**
- Workforce expanded to **300+ employees**
- Multi-hospital system stabilized and positioned for long-term viability

---

#### Case Study 3: Doctors Diagnostic Hospital (DDH)

**Location:** Cleveland, Texas  
**Profile:** Community hospital  
**Challenge:** Low volumes, limited reserves, constrained growth

**Image:** [Hospital exterior - calm, professional]

**The Situation**
```
Doctors Diagnostic Hospital operated with modest volumes and limited financial 
reserves, restricting its ability to scale services and create shareholder value.
```

**Our Approach**
```
St Raphael Health focused on operational efficiency, revenue expansion, and 
balance sheet strengthening to support sustainable growth.
```

**The Results**
- Gross revenue growth from **$10M to $56M**
- Shift from negative margins to a **32% profit margin**
- Daily patient census increased **75%**
- Reserves expanded by **150%**
- **$18M in profit achieved**
- First-ever shareholder dividend distributed

---

#### What These Outcomes Demonstrate

```
Across all case studies:
- Distressed operations were stabilized
- Profitability was restored
- Community healthcare access was strengthened
- Leadership regained strategic control
- Optionality was created for long-term operation or transaction

These outcomes were achieved through execution, accountability, and 
disciplined operational leadership.
```

---

#### Closing CTA

```
Headline: If your hospital is under pressure, proven execution matters.

CTA: Speak With Our Operating Team →
```

---

#### Design Notes

- Editorial, magazine-style layout
- Large metrics highlighted visually
- Calm hospital imagery (not emergency-focused)
- Consistent formatting across all case studies

---

### 5. Team Page

#### Page Headline

```
A seasoned operating and advisory team with proven hospital turnaround 
and platform-scale experience
```

---

#### Intro

```
St Raphael Health is led by a deeply experienced operating and advisory 
team with over 200 years of combined healthcare leadership, supported by 
a corporate development and capital markets bench with $8B+ in transaction 
experience.

The team has operated 14 hospitals, led multiple distressed and bankrupt 
hospital turnarounds, and scaled platforms generating $350-$400M in 
incremental annual revenue while restoring profitability, compliance, 
and operational stability.
```

---

#### Operating Team

**Don Vickers**  
_Chief Executive Officer_

[Headshot image]

```
Don Vickers is a veteran hospital executive with more than 15 years of 
leadership experience across multi-facility healthcare systems. He has 
served as CEO of multiple hospitals, including St. Michael's, BMC Heights, 
Altus Houston, and American Premier, leading complex turnarounds and growth 
initiatives.

Under Don's leadership, distressed hospital systems have been scaled from 
32 to 300+ staff, revenues expanded materially, and physician networks 
aligned to drive sustainable growth. He has reopened and stabilized defunct 
hospitals, launched outpatient emergency departments, and led large-scale 
vaccination initiatives delivering over 40,000 COVID-19 doses.

Don has deep expertise in accreditation, licensing, regulatory readiness, 
and physician alignment. He is a voting member of the Texas Department of 
Health Services Syndromic Surveillance Governance Council and holds advanced 
healthcare management credentials.
```

---

**Patti Foster**  
_Chief Operating Officer_

[Headshot image]

```
Patti Foster brings over 30 years of executive healthcare operations 
experience, with deep expertise in hospital administration, operational 
turnaround, and system-wide performance improvement. She has led complex 
healthcare organizations through periods of distress, restructuring, and growth.

Her leadership focuses on operational discipline, staffing optimization, 
regulatory compliance, and execution at scale across acute care hospitals 
and emergency facilities.
```

---

**Robin Croninger Workman**  
_Chief Revenue Cycle Officer_

[Headshot image]

```
Robin is a nationally recognized revenue cycle executive with 30+ years of 
experience across for-profit and not-for-profit healthcare systems. Her 
expertise spans acute care hospitals, surgical hospitals, ASCs, CAHs, and 
large private practices.

She specializes in rapid diagnosis and correction of Patient Access and 
Patient Financial Services breakdowns, delivering immediate cash-flow impact 
and sustainable revenue performance. Robin has hands-on experience implementing 
and optimizing enterprise systems including Epic, Cerner, Meditech, 
CPSI/TruBridge, Athena, NextGen, and SIS.
```

---

**Kimberly M. Harrington, MSN, BA, RN**  
_Chief Quality Officer_

[Headshot image]

```
Kimberly Harrington is a senior clinical leader with 30+ years of experience 
in hospital quality, nursing leadership, and emergency department operations. 
She has served as CNO, Chief Quality Officer, and ED Director across hospitals, 
surgical centers, and behavioral health systems.

She leads quality, infection control, regulatory compliance, and board-level 
reporting across multi-site operations. Known for ED turnarounds, Kimberly 
has consistently improved patient satisfaction, reduced wait times, and 
strengthened regulatory readiness.
```

---

**Suzi Halfpenny**  
_Head of Asset Management & Operations_

[Headshot image]

```
Suzi brings deep private equity and asset management experience, having 
played a key role in scaling a firm from $500M to over $2B AUM. She has 
led the implementation of institutional-grade controls, workflows, and 
governance frameworks to support rapid platform growth.

Her background includes supporting over $1B in fundraising initiatives, 
optimizing operational processes, and building scalable teams across 
complex asset portfolios.
```

---

**Greg Rook**  
_Corporate Finance_

[Headshot image]

```
Greg Rook is a senior finance and data strategy leader with over a decade 
of experience across private equity, FP&A, and capital planning. He 
previously built and led an asset performance team overseeing $10B in 
assets, driving finance system overhauls, analytics integration, and 
underwriting optimization.

He is a CPA/CA with advanced expertise in institutional reporting, 
performance analytics, and platform-scale financial operations.
```

---

**Thomas Le Maguer**  
_Head of Corporate Development_

[Headshot image]

```
Thomas brings deep experience in M&A, growth strategy, and platform creation. 
He has led 13 acquisitions totaling over $1.2B in transaction value and 
supported roll-ups generating $10M+ EBITDA.

He has also built performance-driven growth systems for over 900 businesses, 
generating more than $750M in client revenue, and founded and exited multiple 
ventures across marketing, finance, and capital deployment.
```

---

**Adam Hollander**  
_Vice President of Integrations, Partner_

[Headshot image]

```
Adam is a post-acquisition integration specialist with experience leading 
$1.5B+ in integrations across North America, Europe, Australia, and South 
Africa. He has managed complex M&A integrations, including a $500M acquisition 
in the financial systems sector, ensuring operational continuity and value 
realization post-close.
```

---

**Eric Mui**  
_Vice President of Finance_

[Headshot image]

```
Eric is a finance leader with a strong background in operational efficiency, 
audit readiness, and scalable financial systems. He has successfully scaled 
early-stage operations, optimized mid-market finance teams, and built 
reporting frameworks covering project profitability, forecasting, and 
executive decision support.
```

---

**Robin Mason**  
_Healthcare Human Resources_

[Headshot image]

```
Robin Mason brings 25+ years of healthcare operations and HR leadership, 
with experience across hospitals, surgical centers, and regional health 
systems. She has led post-merger integrations, workforce alignment 
initiatives, and multi-facility operational turnarounds.

Her expertise includes surgical services optimization, OR utilization, 
compliance leadership, and accreditation readiness across DNV, Joint 
Commission, and state and federal audits.
```

---

**Greg Shore**  
_Managing Capital Director_

[Headshot image]

```
Greg Shore is a capital markets and development executive with experience 
structuring and financing complex projects across healthcare, real estate, 
energy infrastructure, and private-equity-backed platforms.
```

---

**Nick van Zyl**  
_Head of AI & Business Automation_

[Headshot image]

```
Nick leads SRH's automation, systems integration, and AI infrastructure. 
With a background in banking-grade development, he designs secure, scalable 
systems that automate operations, integrate enterprise platforms, and 
support institutional reporting.

His work focuses on reliability, security, and operational leverage across 
SRH's hospital platform.
```

---

**Tanya van Zyl**  
_Director of Marketing_

[Headshot image]

```
Tanya leads brand strategy, communications, and growth initiatives for 
St Raphael Health. With over 20 years of experience in strategic marketing, 
lead generation, and positioning, she ensures SRH is clearly positioned as 
a trusted operator-led healthcare platform for hospital owners, investors, 
and partners.
```

---

#### Advisory Team

**Uri Levine**  
_Technology Advisor_

[Headshot image]

```
Co-founder of Waze (acquired by Google for $1.1B) and Moovit (acquired by 
Intel for $1B), Uri brings decades of experience building and scaling 
technology platforms that solve complex systemic problems.
```

---

**Michael Hiley**  
_Private Equity, Accounting & Tax_

[Headshot image]

```
Michael is a senior partner at BDO Canada LLP with over 20 years of public 
accounting experience, specializing in private equity, complex financial 
reporting, and institutional compliance across public and private entities.
```

---

**David F. W. Cohen**  
_Restructuring Advisor_

[Headshot image]

```
David leads Financial Institutions and Restructuring at Gowling WLG and is 
a former President of the Turnaround Management Association. He has advised 
on major cross-border restructurings, including $1.8B+ transactions, and 
complex secured financings.
```

---

**Paul Van Eyk**  
_Global Restructuring Advisor_

[Headshot image]

```
Paul is Global Head of Restructuring and Turnarounds at KPMG, advising 
boards, lenders, and investors on enterprise transformation, value creation, 
and post-merger integration across large-scale platforms.
```

---

### 6. Why Profit Matters Page

#### Page Headline

```
Profitability is not the objective. It is the enabler.
```

---

#### Introduction

```
In healthcare, profit is often misunderstood.

At St Raphael Health, profitability is not about extracting value from 
communities. It is about protecting patient care, preserving access, and 
creating stability in hospital environments under constant operational and 
financial pressure.

Without sustainable profit, hospitals lose options.
With it, they gain control.
```

---

#### Section 1: The Reality Facing Hospitals

```
Across the United States, the majority of hospitals operate under some 
level of financial distress.

When margins are negative or unpredictable:
- Capital becomes constrained
- Staff turnover increases
- Technology investment stalls
- Community trust erodes
- Strategic choices disappear

Profitability is the difference between constant reaction and effective 
leadership.
```

---

#### Section 2: Profit Enables What Matters Most

**1. Care for the Community**

```
Sustainable profit allows hospitals to:
- Invest in modern equipment and technology
- Recruit and retain high-quality clinical staff
- Expand service lines that meet real community needs
- Improve patient experience and outcomes

Care improves when hospitals are financially stable.
```

**2. Freedom and Stability for Leadership**

```
When a hospital is profitable:
- Leaders can plan instead of firefighting
- Decisions are proactive rather than forced
- Teams operate with clarity and confidence
- Governance becomes strategic instead of defensive

Profit restores operational freedom.
```

**3. Value Creation and Strategic Options**

```
Profitability creates optionality.

Stable, well-run hospitals can:
- Remain independent
- Form strategic partnerships
- Access capital on better terms
- Pursue a sale at a materially higher valuation

Without profit, these options do not exist.
```

---

#### Section 3: Profit Is the Enabler (Diagram Section)

**Visual Structure:**
- Center circle: **Profit** (Sustainable profitability)
- Three connected elements radiating outward

**Center:**
```
PROFIT
Sustainable profitability

Profit sits at the center because everything else depends on it.
```

**Connected Element 1: Sell / Value Creation**
```
When a hospital is profitable, it is worth more than when it is losing money. 
Profitability restores enterprise value and creates real strategic options, 
including partnership or sale.
```

**Connected Element 2: Care for the Community**
```
Profit enables investment in staffing, technology, services, and patient 
experience, directly improving the quality of care delivered.
```

**Connected Element 3: Freedom & Stability**
```
Profit allows leadership to operate proactively instead of reacting to 
constant crisis, creating stability for teams, governance, and long-term 
planning.
```

---

#### Section 4: The Core Principle

```
Whether the goal is to:
- Protect essential community healthcare
- Restore operational control
- Stabilize a distressed facility
- Or prepare for a future transaction

Profitability is the starting point.

That is why St Raphael Health focuses first on restoring sustainable 
profit—not as an end in itself, but as the foundation for care, stability, 
and long-term value.
```

---

#### Pull Quote (Optional Callout)

```
Profit is not the objective.
It is the enabler of care, stability, and choice.
```

---

#### Closing Section

```
Headline: Hospitals cannot serve their communities without financial strength.

CTA: Speak With Our Operating Team →
```

---

#### Mobile Version (Stacked Explanation)

```
Profit Is the Enabler

Profitability is not the goal.
It is what makes everything else possible.

Care for the Community
Profit allows hospitals to invest in staff, technology, services, and 
patient experience so communities receive consistent, high-quality care.

Freedom & Stability
Profit enables leadership to plan ahead instead of reacting to constant 
crisis. Teams are stronger, turnover is lower, and decisions are proactive.

Value Creation
When hospitals are profitable, they gain options. They can remain 
independent, form partnerships, or pursue a sale from a position of strength.

Bottom Line
Whether the goal is care, stability, or strategic options, profitability 
is the starting point.
```

---

#### Design Notes

- Place after Case Studies in site hierarchy
- Pair with a simple, calm diagram (no aggressive finance visuals)
- Soft color palette, strong typography
- Readable and reassuring for a 40+ healthcare audience
- Should feel credible and steady, not transactional

---

### 7. Contact Page

#### Page Headline

```
Start the conversation.
```

---

#### Intro Copy

```
If your hospital, health system, or community is under operational or 
financial pressure, an early conversation can create options.

St Raphael Health works confidentially with hospital leadership, boards, 
municipalities, and investors to assess situations, stabilize operations, 
and restore control.
```

---

#### Contact Form

**Form Fields:**
- Full Name (required)
- Email Address (required)
- Phone Number (required)
- Organization / Hospital Name (required)
- City / State (required)
- Message (textarea, required)

**Optional Dropdown - Reason for Contact:**
- Advisory Services
- Hospital Partnership
- Investor Inquiry
- Municipality / Board Inquiry
- Media / Press
- Other

**Consent Checkbox:**
```
"I agree to be contacted by St Raphael Health regarding my inquiry."
```

**Submit Button:** Submit Inquiry →

**Form Delivery:**
- To: info@saintraphaelhealth.com
- CC: Don

---

#### Direct Contact

```
If you prefer, you may contact us directly:

Email: info@saintraphaelhealth.com

All inquiries are treated as confidential.
```

---

#### What Happens Next (Reassurance Section)

```
After submitting your inquiry:
- A member of our operating team will review your message
- We will respond promptly and discreetly
- No obligation, no pressure

Our goal is to understand your situation and determine whether we can 
be helpful.
```

---

### 8. Legal Pages

#### Privacy Policy
[Content to be provided]

#### Terms & Conditions
[Content to be provided]

#### Compliance
[Content to be provided]

---

## Component Specifications

### Global Header Component

**Requirements:**
- Fixed or sticky positioning (TBD based on design preference)
- Transparent or solid background (TBD)
- Logo: St Raphael Health (link to homepage)
- Navigation menu (desktop)
- Hamburger menu (mobile/tablet)
- Consistent across all pages

**Desktop Navigation:**
- Horizontal menu
- Hover states with subtle color shift
- Active page indicator

**Mobile Navigation:**
- Hamburger icon (top right)
- Full-screen or slide-in menu
- Close button visible

---

### Global Footer Component

**Requirements:**
- Minimal design
- Identical across all pages
- Clean typography

**Content:**
```
Privacy Policy · Terms & Conditions · Compliance
info@saintraphaelhealth.com
```

**Style:**
- Simple text links
- Subtle dividers (·)
- Centered or left-aligned (TBD)
- Warm stone background or white

---

### Form Component (Reusable)

**Design Requirements:**
- Clean, minimal aesthetic
- Generous padding and spacing
- Clear labels above fields
- Placeholder text in lighter color
- Required field indicators (*)
- Validation messages
- Loading state for submit button
- Success message display

**Form Styling:**
```css
Input fields:
- Border: 1px solid #DBD5CA
- Background: #FFFFFF
- Focus state: Border color shifts to #CBA85C
- Padding: 12-16px
- Font: Montserrat Regular

Submit button:
- Background: #CBA85C (gold)
- Hover: Darker shade or subtle lift
- Transition: 200-300ms
- Text: Montserrat Semibold
```

---

### Card Component (Case Studies, Team)

**Requirements:**
- Consistent card structure
- Image at top (if applicable)
- Content area with hierarchy
- Optional CTA button
- Hover state (subtle lift or shadow)

**Style:**
- Background: White or warm stone
- Border: None or 1px subtle
- Border-radius: 8-12px
- Shadow: Subtle on hover
- Padding: 24-32px

---

### CTA Button Component

**Primary Button (Solid):**
```css
Background: #CBA85C
Color: #000000
Padding: 14px 32px
Border-radius: 4-8px
Font: Montserrat Semibold
Hover: Darken or lift
Transition: 200ms
```

**Secondary Button (Outlined):**
```css
Background: transparent
Border: 2px solid #CBA85C
Color: #000000
Padding: 14px 32px
Border-radius: 4-8px
Font: Montserrat Semibold
Hover: Fill with gold, text stays dark
Transition: 200ms
```

---

### Metric Display Component

**Requirements:**
- Large, bold numbers
- Supporting context text
- Icon or divider (optional)
- Subtle animation on scroll-in

**Style:**
```
Number:
- Font: Lounge or Montserrat Bold
- Size: 48-72px
- Color: #CBA85C or #000000

Label:
- Font: Montserrat Regular
- Size: 14-16px
- Color: #000000
```

---

### Section Divider Component

**Requirements:**
- Subtle visual separation
- Warm stone background option
- Consistent spacing

**Options:**
- Horizontal line (1px, #DBD5CA)
- Color block section (warm stone background)
- Spacing only (120-160px vertical)

---

## Technical Requirements

### Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

### Performance Requirements
- Page load time: < 3 seconds
- First Contentful Paint: < 1.5 seconds
- Time to Interactive: < 3.5 seconds
- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices)

---

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 767px)

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px)

/* Desktop */
@media (min-width: 1024px)

/* Large Desktop */
@media (min-width: 1440px)
```

---

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Semantic HTML (proper heading hierarchy)
- Alt text for all images
- Keyboard navigation support
- Focus indicators visible
- Sufficient color contrast (check warm palette carefully)
- ARIA labels where appropriate
- Skip to main content link

---

### SEO Requirements
- Semantic HTML structure
- Meta descriptions (50-160 characters) for all pages
- Open Graph tags for social sharing
- Title tags (50-60 characters)
- H1 tag (one per page)
- Proper heading hierarchy (H1 → H2 → H3)
- Clean URL structure (lowercase, hyphens)
- XML sitemap
- Robots.txt

---

### Form Requirements

**Validation:**
- Client-side validation (immediate feedback)
- Required field validation
- Email format validation
- Phone number format validation
- Character limits on message fields

**Spam Protection:**
- Honeypot field (hidden)
- reCAPTCHA (optional, TBD)
- Rate limiting on backend

**Delivery:**
- To: info@saintraphaelhealth.com
- CC: Don (email address TBD)
- Email format: Plain text or HTML (TBD)
- Include all form fields
- Include submission timestamp
- Include referring page URL

**Success Handling:**
- Clear success message
- Form clears after submission
- Optional: Redirect to thank you page (TBD)

**Error Handling:**
- Display error messages clearly
- Preserve form data on error
- Provide clear next steps

---

### Animation Requirements

**Allowed Animations:**
```css
/* Fade in */
opacity: 0 → 1
transition: 400-600ms ease

/* Subtle lift on hover */
transform: translateY(0) → translateY(-4px)
transition: 200ms ease

/* Gentle parallax */
transform: translateY based on scroll
slow, subtle movement only

/* Color transitions */
transition: 200-300ms ease
```

**Prohibited:**
- Aggressive movements
- Spinning/rotating elements
- Bouncing effects
- Rapid transitions
- Auto-playing videos with sound

---

## Content Guidelines

### Voice & Tone

**Characteristics:**
- Calm and confident
- Reassuring but not patronizing
- Executive-level (assume intelligence)
- Factual and metric-driven
- Never promotional or "salesy"
- No urgency or pressure tactics

**Example - Good:**
```
"We embed directly with hospital leadership teams to stabilize operations, 
restore profitability, and create durable long-term value."
```

**Example - Avoid:**
```
"Don't wait! Our amazing team of experts is standing by to revolutionize 
your hospital! Act now!"
```

---

### Proof Points & Claims

**Requirements:**
- Every claim must be supported by data
- Use real metrics from actual engagements
- Avoid vague statements
- Attribute outcomes correctly

**Example - Good:**
```
"Gross revenue growth from $85M to $290M"
"Emergency room visits increased 380%"
```

**Example - Avoid:**
```
"Dramatic improvements"
"Significant growth"
"Better outcomes"
```

---

### Formatting Standards

**Headings:**
- H1: One per page, main page title
- H2: Major sections
- H3: Subsections
- H4: Minor subsections (use sparingly)

**Emphasis:**
- Bold: Use sparingly for critical terms only
- Italics: Use for subtle emphasis or publication titles
- ALL CAPS: Avoid except for acronyms

**Lists:**
- Use only when structure requires it
- Prefer prose for narrative content
- Bullet points: 1-2 sentences minimum (if used)
- Numbered lists: For sequential processes only

**Line Length:**
- Maximum: 80-90 characters per line for readability
- Use appropriate line-height (1.6-1.8 for body text)

---

## Asset Requirements

### Images

**Formats:**
- Primary: WebP (with JPG fallback)
- SVG for logos and icons
- PNG for graphics requiring transparency

**Sizes:**
- Hero images: 1920px × 1080px minimum
- Case study images: 1200px × 600px minimum
- Team headshots: 800px × 800px (square)
- Thumbnail images: 600px × 400px
- Provide 2x versions for retina displays

**Optimization:**
- Compress all images (WebP: 80-85 quality)
- Use responsive images (srcset, picture element)
- Lazy load below-the-fold images
- Alt text for all images (descriptive, not keyword-stuffed)

---

### Icons

**Requirements:**
- SVG format preferred
- Consistent style across site
- Size: 24px, 32px, 48px variants
- Color: Inherit from parent or #CBA85C
- Accessibility: ARIA labels or hidden from screen readers if decorative

**Icon Needs:**
- Navigation arrows (→)
- Social media icons (if applicable)
- Service/pillar icons (6 custom icons)
- Contact icons (phone, email, location)
- Success/error indicators for forms

---

### Fonts

**Primary Fonts:**
```
Font Family: Lounge
- Regular (400)
File formats: WOFF2, WOFF
Usage: Headlines, section headers

Font Family: Montserrat
- Light (300)
- Regular (400)
- Semibold (600)
- Bold (700)
File formats: WOFF2, WOFF
Usage: Body copy, subheadings, UI elements
```

**Fallback Stack:**
```css
font-family: 'Lounge', Georgia, serif;
font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Helvetica, Arial, sans-serif;
```

**Loading Strategy:**
- Font-display: swap
- Preload critical fonts
- Subset fonts if possible (Latin character set)

---

### Logo

**Requirements:**
- Primary logo (full color)
- White version (for dark backgrounds, if needed)
- Black version (for print/light backgrounds)
- Favicon versions (16×16, 32×32, 192×192, 512×512)
- Apple Touch Icon (180×180)

**Formats:**
- SVG (scalable, preferred)
- PNG (high-resolution fallback)

---

## Development Checklist

### Phase 1: Foundation & Setup
- [ ] Set up project structure
- [ ] Install dependencies
- [ ] Configure build tools
- [ ] Set up version control
- [ ] Create design system (CSS variables)
- [ ] Set up typography
- [ ] Create color palette
- [ ] Build component library starter

---

### Phase 2: Global Components
- [ ] Header/Navigation
  - [ ] Desktop navigation
  - [ ] Mobile hamburger menu
  - [ ] Logo integration
  - [ ] Active page states
- [ ] Footer
  - [ ] Links
  - [ ] Contact email
  - [ ] Consistent styling
- [ ] Form component (reusable)
  - [ ] Input fields
  - [ ] Textarea
  - [ ] Dropdown
  - [ ] Checkbox
  - [ ] Submit button
  - [ ] Validation
  - [ ] Success/error states

---

### Phase 3: Homepage
- [ ] 50/50 split layout
  - [ ] Left panel (Hospitals)
  - [ ] Right panel (Physicians)
  - [ ] Center divider animation
- [ ] Hover states
- [ ] Responsive breakpoints
- [ ] Below-fold contact form
- [ ] Form integration
- [ ] Animations (fade-in, parallax)

---

### Phase 4: Hospital Advisory Page
- [ ] Hero section with proof strip
- [ ] Who We Serve section
- [ ] Our Approach section
- [ ] Why SRH Was Formed
- [ ] Operating Pillars (6-column grid)
- [ ] Case Studies preview cards
- [ ] Mission & Vision
- [ ] Why Profit Matters teaser
- [ ] Primary CTA section
- [ ] Contact preview

---

### Phase 5: Our Approach Page
- [ ] On-page anchor navigation
- [ ] How We Work section (5 subsections)
- [ ] Operating Pillars (6 detailed sections)
- [ ] Execution Model (4 phases)
- [ ] What Makes Us Different
- [ ] Proof callout
- [ ] Who This Is For
- [ ] Closing CTA

---

### Phase 6: Case Studies Page
- [ ] Page header
- [ ] Case Study 1 (BMC)
  - [ ] Layout
  - [ ] Image integration
  - [ ] Metrics highlighting
- [ ] Case Study 2 (EHS)
- [ ] Case Study 3 (DDH)
- [ ] Outcomes summary
- [ ] Closing CTA
- [ ] Magazine-style layout

---

### Phase 7: Team Page
- [ ] Page header and intro
- [ ] Operating Team section
  - [ ] Team member cards (14 members)
  - [ ] Headshot integration
  - [ ] Bio formatting
- [ ] Advisory Team section (4 members)
- [ ] Grid layout (responsive)
- [ ] Consistent card styling

---

### Phase 8: Why Profit Matters Page
- [ ] Page header
- [ ] Introduction
- [ ] Reality Facing Hospitals
- [ ] Profit Enables section (3 subsections)
- [ ] Diagram section
  - [ ] Center: Profit
  - [ ] Three connected elements
  - [ ] Visual design
- [ ] Core Principle
- [ ] Pull quote
- [ ] Closing CTA
- [ ] Mobile stacked version

---

### Phase 9: Contact Page
- [ ] Page header
- [ ] Intro copy
- [ ] Contact form
  - [ ] All fields
  - [ ] Dropdown
  - [ ] Consent checkbox
  - [ ] Form handling
- [ ] Direct contact section
- [ ] What Happens Next
- [ ] Form delivery setup

---

### Phase 10: Legal Pages
- [ ] Privacy Policy page
- [ ] Terms & Conditions page
- [ ] Compliance page
- [ ] Consistent layout
- [ ] Link from footer

---

### Phase 11: Polish & Optimization
- [ ] Cross-browser testing
- [ ] Mobile responsiveness review
- [ ] Performance optimization
  - [ ] Image compression
  - [ ] Lazy loading
  - [ ] Code minification
- [ ] Accessibility audit
  - [ ] Keyboard navigation
  - [ ] Screen reader testing
  - [ ] Color contrast check
- [ ] SEO implementation
  - [ ] Meta tags
  - [ ] Open Graph tags
  - [ ] Sitemap
  - [ ] Robots.txt
- [ ] Analytics setup (if applicable)
- [ ] Form testing (delivery, validation)
- [ ] Final content review

---

### Phase 12: Launch Preparation
- [ ] Domain setup
- [ ] SSL certificate
- [ ] DNS configuration
- [ ] Email setup (info@saintraphaelhealth.com)
- [ ] Hosting configuration
- [ ] Backup strategy
- [ ] Launch checklist review
- [ ] Stakeholder review
- [ ] Final QA pass

---

## Notes for Future Development

### Physicians Page
**Status:** Content not yet provided

**Expected sections:**
- Hero/landing section
- Services overview
- Approach for physician groups
- Case examples (if applicable)
- CTA

**To be determined:**
- Content structure
- Specific offerings
- Proof points
- Target physician specialties

---

### Additional Features (Future Consideration)
- Blog/insights section
- Newsletter signup
- Downloadable resources (whitepapers, case study PDFs)
- Video testimonials
- Interactive tools (ROI calculator, assessment quiz)
- Multi-language support (if expansion beyond Texas)

---

## Appendix: Quick Reference

### Color Variables (CSS)
```css
:root {
  /* Primary Brand */
  --color-gold-ochre: #CBA85C;
  --color-soft-gold: #EDBD56;
  
  /* Support/Authority */
  --color-deep-red: #C2322F;
  --color-burgundy: #801B1F;
  
  /* Neutrals */
  --color-black: #000000;
  --color-warm-stone: #DBD5CA;
  --color-white: #FFFFFF;
  
  /* Typography */
  --font-headline: 'Lounge', Georgia, serif;
  --font-body: 'Montserrat', -apple-system, sans-serif;
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 48px;
  --spacing-xl: 80px;
  --spacing-xxl: 120px;
  
  /* Transitions */
  --transition-fast: 200ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 600ms ease;
}
```

---

### Contact Information
- **Email:** info@saintraphaelhealth.com
- **Form CC:** Don (email TBD)

---

### Key Metrics (For Reference)
- **200+ years** of combined hospital operating experience
- **14 hospitals** operated
- **$8B+** in transaction experience
- **$350-$400M** in incremental annual revenue generated

**BMC Hospitals:**
- $85M → $290M revenue
- 19% profit margin
- ER visits +380%
- Surgical volume +300%
- Inpatient census 14x

**Emergency Hospital Systems:**
- $18M → $190M revenue
- 12% profit margin
- Profitability in 6 months

**Doctors Diagnostic Hospital:**
- $10M → $56M revenue
- 32% profit margin
- Daily census +75%
- Reserves +150%
- $18M profit

---

**End of Specification**