function s(t){return!!t.querySelector('[data-testid="icon-verified"]')}function o(t){return t?/[\p{Script=Hiragana}\p{Script=Katakana}]+/u.test(t):!1}function c(t){return t?/NFT/i.test(t):!1}function a(t){return!t.querySelector("article")}function u(t){const e=t.querySelector('[data-testid="User-Name"]');return e?c(e==null?void 0:e.textContent)?!0:s(t)?!o(e==null?void 0:e.textContent):!1:!1}function f(t){const e=t.querySelector('[data-testid="tweetText"]'),r=o((e==null?void 0:e.textContent)??void 0);return!(e==null?void 0:e.querySelector("span"))||!e||!r}function l(t){return t instanceof HTMLElement}function d(t){return t.style.display==="none"}function p(t){return!!t.querySelector('article[tabindex="-1"]')}function i(t){t.style.display="none"}function T(){if(!window.location.pathname.includes("status"))return;const e=document.body.querySelector('[aria-label="Timeline: Conversation"]'),r=e==null?void 0:e.querySelectorAll('[data-testid="cellInnerDiv"]');if(r){for(const n of r)if(l(n)&&!d(n)&&!p(n)){if(a(n)){i(n);continue}if(u(n)){i(n);continue}if(f(n)){i(n);continue}}}}const y=new MutationObserver(T);y.observe(document.body,{childList:!0,subtree:!0});
