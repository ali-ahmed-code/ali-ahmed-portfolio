"""Regenerate public/resume.pdf from the supplied résumé details.

Optional authoring dependency: python -m pip install reportlab
The website itself needs only Node.js and npm; the PDF is already included.
"""

from pathlib import Path

import reportlab
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume.pdf"
INK = colors.HexColor("#181320")
ACCENT = colors.HexColor("#624294")

# Embedded fonts avoid substitution and preserve spacing on every device.
FONT_ROOT = Path(reportlab.__file__).resolve().parent / "fonts"
pdfmetrics.registerFont(TTFont("ResumeSans", str(FONT_ROOT / "Vera.ttf")))
pdfmetrics.registerFont(TTFont("ResumeSans-Bold", str(FONT_ROOT / "VeraBd.ttf")))
pdfmetrics.registerFontFamily("ResumeSans", normal="ResumeSans", bold="ResumeSans-Bold")

styles = {
    "name": ParagraphStyle("name", fontName="ResumeSans-Bold", fontSize=23, leading=27, textColor=INK, alignment=TA_CENTER, spaceAfter=5),
    "contact": ParagraphStyle("contact", fontName="ResumeSans", fontSize=8.6, leading=12, textColor=INK, alignment=TA_CENTER),
    "section": ParagraphStyle("section", fontName="ResumeSans-Bold", fontSize=10, leading=12, textColor=ACCENT, spaceBefore=10, spaceAfter=5, borderWidth=0, borderPadding=0),
    "body": ParagraphStyle("body", fontName="ResumeSans", fontSize=9.1, leading=12, textColor=INK, spaceAfter=2),
    "role": ParagraphStyle("role", fontName="ResumeSans-Bold", fontSize=9.2, leading=12, textColor=INK, spaceBefore=4, spaceAfter=2),
    "bullet": ParagraphStyle("bullet", fontName="ResumeSans", fontSize=9.1, leading=12, textColor=INK, leftIndent=10, firstLineIndent=-7, spaceAfter=2),
}
story = []


def add(text, style="body"):
    story.append(Paragraph(text, styles[style]))


def section(text):
    add(text.upper(), "section")


def bullet(text):
    add("&#8226; " + text, "bullet")


add("Ali Ahmed", "name")
add('(469) 386-2859 | <link href="mailto:aliahmed7d3@gmail.com">aliahmed7d3@gmail.com</link> | Tempe, AZ', "contact")
add('<link href="https://www.linkedin.com/in/aahme105">linkedin.com/in/aahme105</link> | <link href="https://github.com/ali-ahmed-code">github.com/ali-ahmed-code</link>', "contact")

section("Education")
add("<b>Arizona State University</b>, Tempe, AZ | B.S. Computer Science | Expected May 2027")
add("GPA: 3.5 | New American Merit Scholarship: $14,500 USD | Dean's List: Fall 2023, Spring 2025")
add("<b>Relevant coursework:</b> Data Structures and Algorithms; Object-Oriented Programming; Computer Organization and Assembly Language; Introduction to Programming Languages; Entrepreneurship in Tech")
add('<b>Certification:</b> "Programming for Everybody" - University of Michigan (Coursera), Sept 2025')

section("Technical Skills")
add("<b>Languages:</b> Java, JavaScript, Python, C, C++, Bash, HTML, CSS")
add("<b>Tools, frameworks and databases:</b> VS Code, Node.js, GitHub, Jira, Supabase")

section("Experience")
add("Facilities Supervisor | Sun Devil Fitness Complex, ASU | May 2025 - Present", "role")
bullet("Supervise facility operations and enforce safety procedures; CPR and First Aid certified.")
bullet("Assist 2,000+ daily users with facility access, equipment, and recreation support.")
bullet("Coordinate with an 80-person staff team to support daily facility operations.")

add("Web Development Intern | Project Managers, Karachi, Pakistan | May - July 2023", "role")
bullet("Fixed front-end HTML, CSS, and JavaScript bugs that disrupted client appointment bookings; used Jira for sprint and bug tracking.")
bullet("Redesigned the booking workflow, reducing average booking time from 13 to 6 minutes.")
bullet("Increased monthly consultations 44% (9 to 13 clients), driving a 44% rise in revenue.")

add("IT &amp; Digital Support Intern | J. Junaid Jamshed, Karachi | Nov 2022 - Jan 2023", "role")
bullet("Resolved digital catalog data inconsistencies as part of a six-person team.")
bullet("Improved catalog update speed by 30%, reduced data-entry errors by 20%, and contributed to a 12% increase in online sales.")

section("Projects")
add("Weather App | Personal Project | HTML, CSS, JavaScript, OpenWeatherMap API", "role")
bullet("Built a responsive forecasting web app using real-time weather data and asynchronous API handling.")
bullet("Added dynamic weather icons and dual Celsius/Fahrenheit display; deployed using GitHub Pages with mobile-responsive layouts.")

section("Leadership & Involvement")
add("Society Executive Member | Lyceum Lytech (Tech Society) | Aug 2022 - May 2023", "role")
bullet("Organized a Tech Fair for 250+ participants and led a 113-member team on logistics and registration.")
bullet("Ran a social media campaign that increased participation by 25%.")
add("Volunteer | Lyceum Service Society, Karachi | Oct 2021 - May 2023", "role")
bullet("Organized bake sales and donation drives that raised approximately $4,000 for charity and cancer patients; homeschooled underprivileged students.")

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
SimpleDocTemplate(
    str(OUTPUT), pagesize=letter, topMargin=30, bottomMargin=28,
    leftMargin=36, rightMargin=36, title="Ali Ahmed - Resume", author="Ali Ahmed",
    subject="Computer Science student at Arizona State University",
).build(story)
print(OUTPUT)
