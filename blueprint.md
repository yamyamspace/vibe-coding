<<<<<<< HEAD
# **Mood-Based Book Recommender Blueprint**

## **Project Overview**
A modern, framework-less web application that recommends books based on the user's mood. It leverages Web Components for modularity, modern CSS (oklch, :has(), container queries) for a premium aesthetic, and ES Modules for JavaScript logic.

## **Design & Aesthetics**
- **Typography:** Playfair Display for headers (elegant serif) and Inter for body text (clean sans-serif).
- **Color:** Vibrant colors using `oklch` for perceptually uniform color spaces.
- **Texture:** Subtle noise texture on the background for a premium, tactile feel.
- **Shadows:** Soft, deep, multi-layered shadows to give elements a "lifted" look.
- **Interactivity:** "Glow" effects and smooth transitions on hover/click.
- **Responsive:** Mobile-first approach with container queries for component-level responsiveness.

## **Project Features**
1.  **Mood Selector:** Interactive buttons to choose between Happy, Sad, Adventurous, Thoughtful, Mysterious, and Peaceful.
2.  **Book Card Component:** A custom `<book-card>` element that encapsulates the layout and styling for a single book recommendation.
3.  **Dynamic Rendering:** Recommendations update instantly as the user selects a mood.
4.  **Modern CSS:** Use of Cascade Layers (`@layer`), CSS Variables, and Logical Properties.

## **Implementation Log**
### **Phase 1: Foundation (Initial Setup)**
1.  Define the `blueprint.md` (Current Step).
2.  Set up `index.html` with basic structure and Google Fonts.
3.  Create a robust `style.css` with a focus on modern CSS features.
4.  Implement the core logic in `main.js` using Web Components.

### **Phase 2: Refinement**
- Add more books and detailed descriptions.
- Enhance animations and transitions.
- Fine-tune shadows and textures for a "premium" feel.

### **Phase 3: Localization**
1.  **Translate to Korean:** Update `index.html` content and language attribute to Korean. (Current Step)
2.  **Verify UI:** Ensure the Korean text fits correctly within the layout and maintains the premium aesthetic.
=======
# MoodBook & Shortcut Dashboard - 당신의 독서 생활을 위한 첫 화면

## 서비스 개요
사용자의 독서 생활을 지원하는 '바로가기(Shortcut)' 대시보드입니다. 기분별 도서 추천 서비스인 'MoodBook'과 더불어, 사용자가 자주 방문하는 독서 관련 사이트나 도구를 한곳에서 관리할 수 있는 포털 기능을 제공합니다.

## 주요 기능
- **기분별 추천 단축키**: 기존의 MoodBook 기능을 카드 형태의 단축키로 제공하여 즉각적인 추천 경험 유도.
- **즐겨찾기 대시보드**: 사용자가 자주 찾는 도서 사이트(Goodreads, 교보문고, 밀리의 서재 등)를 세련된 그리드 형태로 배치.
- **실시간 검색**: 대시보드 내에서 즉시 도서를 검색하거나 외부 사이트로 연결.
- **도서 상세 카드 (Web Component)**: 추천 도서를 시각적으로 아름답게 보여주는 커스텀 엘리먼트.
- **다이내믹 테마**: 기분이나 선호에 따라 대시보드의 테마 색상이 부드럽게 전환.

## 디자인 및 스타일
- **Aesthetics**: '글래스모피즘(Glassmorphism)' 기반의 반투명 레이어와 깊이감 있는 섀도우.
- **Color**: `oklch`를 사용하여 눈이 편안하면서도 생동감 넘치는 파스텔 톤 팔레트.
- **Texture**: 종이 질감의 미세 노이즈 배경과 부드러운 그라데이션.
- **Interactivity**: 마우스 호버 시 단축키 카드의 '글로우' 효과 및 부드러운 확대 애니메이션.

## 현재 구현 계획 (진행 중)
1. `index.html`: 대시보드 레이아웃, 검색 바, 단축키 그리드 구조 설계.
2. `style.css`: 대시보드 특화 그리드 시스템 및 호버 애니메이션 강화.
3. `main.js`: 단축키 데이터 관리, 검색 기능, MoodBook 추천 로직 구현.
4. `components/ShortcutCard.js`: 개별 단축키를 위한 Web Component 정의.
>>>>>>> 08f1847 (feat: MoodBook Portal & Shortcut Dashboard 대시보드 및 검색 기능 구현)
