// ================= FORCE HOME ON RELOAD =================
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    const currentFile = window.location.pathname.split("/").pop().toLowerCase();
    // If we are not already on the home page, redirect to index.html
    if (currentFile !== "index.html" && currentFile !== "") {
        window.location.href = "index.html";
    }
}


// ================= FIXED NAVIGATION FOR SPLIT FILES =================
function highlightActiveNav() {
    // Get the current file name from the URL bar (e.g., "SectionB.html")
    const currentPath = window.location.pathname;
    let currentFile = currentPath.split("/").pop().toLowerCase();

    // If you are just opening the root folder or index.html, default to index.html
    if (currentFile === "" || currentFile === "index.html") {
        currentFile = "index.html";
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const hrefAttr = link.getAttribute('href');
        if (hrefAttr) {
            const linkFile = hrefAttr.split("/").pop().toLowerCase();
            
            // Check if the link target matches the file we are currently on
            if (linkFile === currentFile) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}

// Run the function immediately when the page finishes loading
document.addEventListener("DOMContentLoaded", highlightActiveNav);
// ================= ACCORDION =================
function toggleCard(button) {
    const card = button.parentElement;
    const content = button.nextElementSibling;

    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = "0px";
    }
}


// ================= CONTRIBUTION TOGGLE (🔥 FIX) =================
function toggleTable(id) {
    const allTables = document.querySelectorAll('.contribution-table');

    allTables.forEach(table => {
        if (table.id !== id) {
            table.classList.remove('active');
            table.style.maxHeight = null;
        }
    });

    const current = document.getElementById(id);

    current.classList.toggle('active');

    if (current.classList.contains('active')) {
        // 🔥 IMPORTANT: force recalculation AFTER visible
        setTimeout(() => {
            current.style.maxHeight = current.scrollHeight + "px";
        }, 50);
    } else {
        current.style.maxHeight = null;
    }
}


// ================= TOC ACCORDION =================
function toggleTOC(button) {
    const content = button.nextElementSibling;

    // close all others (optional clean UX)
    document.querySelectorAll('.toc-content').forEach(item => {
        if (item !== content) {
            item.style.maxHeight = null;
        }
    });

    // toggle current
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}