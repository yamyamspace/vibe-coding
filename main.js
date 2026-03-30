/**
 * MoodBook Portal - Main JavaScript
 * Handles shortcuts, search, and mood-based book recommendations.
 */

const shortcuts = [
    { label: 'Goodreads', url: 'https://www.goodreads.com', icon: '📚' },
    { label: 'Open Library', url: 'https://openlibrary.org', icon: '📖' },
    { label: 'Google Books', url: 'https://books.google.com', icon: '🔍' },
    { label: 'Project Gutenberg', url: 'https://www.gutenberg.org', icon: '📜' },
    { label: '교보문고', url: 'https://www.kyobobook.co.kr', icon: '🏢' },
    { label: '밀리의 서재', url: 'https://www.millie.co.kr', icon: '🍯' }
];

const bookData = {
    happy: [
        { title: '데미안', author: '헤르만 헤세', desc: '내면의 밝은 빛을 찾아가는 여정' },
        { title: '행복의 기원', author: '서은국', desc: '행복에 대한 진화론적 고찰' }
    ],
    sad: [
        { title: '상실의 시대', author: '무라카미 하루키', desc: '고독과 상실 속에 피어나는 위로' },
        { title: '서른, 잔치는 끝났다', author: '최영미', desc: '치열한 삶 뒤에 오는 담담한 위로' }
    ],
    adventurous: [
        { title: '은하수를 여행하는 히치하이커를 위한 안내서', author: '더글러스 애덤스', desc: '유쾌하고 기발한 우주 모험' },
        { title: '80일간의 세계일주', author: '쥘 베른', desc: '시간을 앞지르는 짜릿한 모험' }
    ],
    calm: [
        { title: '월든', author: '헨리 데이비드 소로', desc: '숲속에서의 소박하고 평온한 삶' },
        { title: '침묵의 기술', author: '조제프 앙투안 투생 디누아르', desc: '소음 가득한 세상에서 평온을 찾는 법' }
    ],
    productive: [
        { title: '아주 작은 습관의 힘', author: '제임스 클리어', desc: '인생을 바꾸는 놀라운 1%의 변화' },
        { title: '몰입', author: '황농문', desc: '한계를 넘어서는 최상의 경험' }
    ]
};

// Web Component for Book Card
class BookCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const author = this.getAttribute('author');
        const desc = this.getAttribute('desc');
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: white;
                    border-radius: 16px;
                    padding: 1.5rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: transform 0.3s ease;
                }
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
                }
                h3 { margin: 0 0 0.5rem 0; color: #1a1a1a; font-family: 'Noto Serif KR', serif; }
                p.author { color: #666; font-size: 0.9rem; margin-bottom: 1rem; }
                p.desc { color: #444; font-size: 1rem; line-height: 1.5; }
            </style>
            <h3>${title}</h3>
            <p class="author">${author}</p>
            <p class="desc">${desc}</p>
        `;
    }
}
customElements.define('book-card', BookCard);

// Initialize Shortcuts
function initShortcuts() {
    const grid = document.getElementById('shortcut-grid');
    grid.innerHTML = shortcuts.map(s => `
        <a href="${s.url}" class="shortcut-card" target="_blank" rel="noopener noreferrer">
            <div class="shortcut-icon">${s.icon}</div>
            <div class="shortcut-label">${s.label}</div>
        </a>
    `).join('');
}

// Handle Mood Selection
function initMoodButtons() {
    const buttons = document.querySelectorAll('.mood-btn');
    const area = document.getElementById('recommendation-area');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle active state
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const mood = btn.dataset.mood;
            const recommendations = bookData[mood];

            // Render recommendations
            area.style.opacity = '0';
            setTimeout(() => {
                area.innerHTML = recommendations.map(book => `
                    <book-card title="${book.title}" author="${book.author}" desc="${book.desc}"></book-card>
                `).join('');
                area.style.opacity = '1';
            }, 300);
        });
    });
}

// Handle Search
function initSearch() {
    const searchInput = document.getElementById('main-search');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value;
            if (query.trim()) {
                window.open(`https://www.google.com/search?q=책+${encodeURIComponent(query)}`, '_blank');
            }
        }
    });
}

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
    initShortcuts();
    initMoodButtons();
    initSearch();
});
