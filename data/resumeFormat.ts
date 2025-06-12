export const resumeFormat = `

\\documentclass{resume} % Use the custom resume.cls style

\\usepackage[left=0.4 in,top=0.4in,right=0.4 in,bottom=0.4in]{geometry} % Document margins
\\newcommand{\\tab}[1]{\\hspace{.2667\\textwidth}\\rlap{#1}} 
\\newcommand{\\itab}[1]{\\hspace{0em}\\rlap{#1}}
\\name{Vijay Kumar Bantu} % Your name
% You can merge both of these into a single line, if you do not have a website.
\\address{+919391901183 \\\\ Hyderabad, Telangana, India} 
\\address{\\\\ \\href{mailto:vijaykumar.bantu2403@gmail.com}{vijaykumar.bantu2403@gmail.com} \\\\ \\href{https://main-portfolio-five-alpha.vercel.app/}{Portfolio} \\\\ \\href{http://www.linkedin.com/in/vijay-kumar-bantu}{Linkedin} \\\\ \\href{https://github.com/Vijay-kumar-bantu}{Github}}  %

\\begin{document}



%----------------------------------------------------------------------------------------
% TECHINICAL STRENGTHS	
%----------------------------------------------------------------------------------------
\\begin{rSection}{SKILLS}

\\begin{tabular}{ @{} >{\\bfseries}l @{\\hspace{6ex}} l }
Programming languages & Java, JavaScript, Typescript.\\\\
Frontend & Next JS, React JS, Redux, Tailwind CSS, Material UI.\\\\
Backend & Next Js, Node JS, Prisma, Express JS, SQL, PostgreSQL, MongoDB.\\\\
Tools & Git, VScode, Docker, Sanity CMS, Turborepo.\\\\
\\end{tabular}\\\\
\\end{rSection}

\\begin{rSection}{EXPERIENCE}

\\textbf{JUNIOR FULL STACK DEVELOPER } \\hfill Oct 2021 - Dec 2023\\\\
Tata consultancy Services (TCS) \\hfill \\textit{Hyderabad}
 \\begin{itemize}
    \\itemsep -3pt {} 
     \\item Contributed to the development of an internal website using React.js and Redux for the frontend, integrating a MySQL backend with a REST API built using Node.js and Express.js, resulting in a 40\\% improvement in load time and 20\\% increase in user satisfaction.
     \\item Streamlined data handling and improved backend functionality, ensuring faster API responses and reducing server-side errors by 30\\%.
     \\item Applied computer science fundamentals such as object-oriented programming (OOP), data structures, and algorithm optimization to solve performance bottlenecks and reduce server response times by 20–30\\%.
 \\end{itemize}
 
\\textbf{FULL STACK DEVELOPER} \\hfill Dec 2023 - present\\\\
Tata consultancy Services (TCS) \\hfill \\textit{Hyderabad}
 \\begin{itemize}
    \\itemsep -3pt {} 
     \\item Developed frontend components for a Retail website using Next.js and Redux, ensuring seamless server-side rendering (SSR) and optimized page load times, resulting in a 30\\% improvement in website performance.
     \\item Enhanced content delivery efficiency by integrating Sanity CMS, improving the website's ability to manage and update content in real time, contributing to a 40\\% increase in content update frequency. 
     \\item Implemented dynamic routing and data fetching in Next.js, improving page responsiveness and reducing load times, which contributed to a 35\\% increase in user engagement and Optimized SEO through SSR, metadata, and keyword integration, improving organic traffic and site visibility by 15\\%.
     \\item Developed a robust backend server using MongoDB, Node.js, and Express.js, ensuring secure, scalable data storage and real-time data handling for customer information, improving data retrieval speed by 25\\%.
     \\item Actively participated in Agile software development, contributing to sprint planning, daily stand-ups, and code reviews in cross-functional teams.
 \\end{itemize}

\\end{rSection} 

%----------------------------------------------------------------------------------------
%	WORK EXPERIENCE SECTION
%----------------------------------------------------------------------------------------

\\begin{rSection}{PROJECTS}
\\vspace{-1.25em}
\\item \\textbf{Turbo Chat App} \\hfill {\\href{https://github.com/Vijay-kumar-bantu/chat-app-turbo}{(View code here)}}
\\begin{itemize} 
     \\item Real-time chat application enabling instant messaging with secure user authentication, built using WebSockets implemented from scratch for seamless communication.
     \\item Ephemeral chat functionality ensures messages expire and are not stored post-logout, prioritizing user privacy and transient conversations akin to temporary sessions.
     \\item Tech stack: React.js + tailwindCSS (frontend), Node.js + Express.js (backend), Turborepo (monorepo management), and Docker (containerization), with a focus on scalable, maintainable architecture.
 \\end{itemize}
 \\end{rSection} 






%----------------------------------------------------------------------------------------
%	EDUCATION SECTION
%----------------------------------------------------------------------------------------

\\begin{rSection}{Education}


{\\bf Bachelor of Science(B.Sc)[MPCS]}, Osmania University \\hfill {2018 - 2021}\\\\
Major in Computer Sceience \\smallskip \\\\



\\end{rSection}


\\end{document}

`;
