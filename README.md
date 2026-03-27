# 🏆 Sprint Final — Ligue 1 2025/2026

Tracker du sprint final de Ligue 1, Top 8 candidats Europe.

## Structure du projet

```
sprint-final/
├── public/
│   └── index.html          ← le site complet (HTML/CSS/JS)
├── netlify/
│   └── functions/
│       └── results.js      ← fonction serverless (proxy API)
├── netlify.toml            ← config Netlify
└── README.md
```

## Déploiement (GitHub + Netlify)

### 1. Créer le repo GitHub
```bash
git init
git add .
git commit -m "Initial commit — Sprint Final L1"
git remote add origin https://github.com/TON_USERNAME/sprint-final-l1.git
git push -u origin main
```

### 2. Connecter à Netlify
1. Va sur [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
2. Sélectionne ton repo GitHub
3. Build settings : tout laisser par défaut (netlify.toml s'en charge)
4. Clique **Deploy**

### 3. Ajouter la clé API (IMPORTANT)
Dans Netlify → **Site settings** → **Environment variables** → **Add variable** :
- Key : `FOOTBALL_API_KEY`
- Value : ta clé football-data.org

### 4. Redéployer
Netlify → **Deploys** → **Trigger deploy** → **Deploy site**

C'est tout ! Le site est en ligne. 🚀

## Fonctionnement

- **Résultats réels** : récupérés automatiquement via football-data.org à chaque visite
- **Pronostics** : sauvegardés dans le localStorage du navigateur (persistants)
- **Duels internes** : le résultat d'un club se propage automatiquement à l'adversaire
- **Classement** : trié dynamiquement avec animations de glissement
- **Graphique** : évolution des points journée par journée
