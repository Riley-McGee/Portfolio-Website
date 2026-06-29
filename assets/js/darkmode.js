const themeSwitch = document.getElementById('theme-switch');
const themeOrder = ['light', 'dark', 'blue', 'forest', 'sunset'];
const themeLabels = {
    light: 'Light',
    dark: 'Dark',
    blue: 'Blue',
    forest: 'Forest',
    sunset: 'Sunset'
};
const storageKey = 'color-scheme';
const legacyDarkmodeKey = 'darkmode';
let themeSelect = null;

const getInitialScheme = () => {
    let savedScheme = localStorage.getItem(storageKey);
    if (savedScheme === 'ocean') {
        savedScheme = 'blue';
    }

    if (savedScheme && themeOrder.includes(savedScheme)) {
        return savedScheme;
    }

    // Keep compatibility with previously stored dark mode preference.
    return localStorage.getItem(legacyDarkmodeKey) === 'active' ? 'dark' : 'light';
};

const applyScheme = (scheme) => {
    document.body.dataset.colorScheme = scheme;
    document.body.classList.toggle('darkmode', scheme === 'dark');

    localStorage.setItem(storageKey, scheme);

    if (scheme === 'dark') {
        localStorage.setItem(legacyDarkmodeKey, 'active');
    } else {
        localStorage.removeItem(legacyDarkmodeKey);
    }

    if (themeSelect) {
        themeSelect.value = scheme;
    }
};

const createThemeDropdown = () => {
    if (document.getElementById('theme-selector-wrap')) {
        return;
    }

    const wrap = document.createElement('div');
    wrap.id = 'theme-selector-wrap';

    const label = document.createElement('label');
    label.setAttribute('for', 'theme-selector');
    label.textContent = 'Theme';

    themeSelect = document.createElement('select');
    themeSelect.id = 'theme-selector';
    themeSelect.setAttribute('aria-label', 'Select color theme');

    themeOrder.forEach((scheme) => {
        const option = document.createElement('option');
        option.value = scheme;
        option.textContent = themeLabels[scheme] || scheme;
        themeSelect.appendChild(option);
    });

    themeSelect.addEventListener('change', (event) => {
        applyScheme(event.target.value);
    });

    wrap.appendChild(label);
    wrap.appendChild(themeSelect);
    document.body.appendChild(wrap);
};

if (themeSwitch) {
    themeSwitch.remove();
}

createThemeDropdown();
applyScheme(getInitialScheme());