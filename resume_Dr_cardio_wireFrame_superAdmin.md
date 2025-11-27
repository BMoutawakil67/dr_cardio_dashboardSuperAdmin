Voici le récapitulatif clair et structuré des pages du Dashboard Super Admin DocteurCardio (Version 2.1), basé sur le wireframe fourni.

### 1. 📊 Dashboard - Vue d'Ensemble
**Fonctionnalités :**
* **KPIs Business (Temps réel) :** Nombre de patients, cardiologues, hôpitaux, alertes, et revenus mensuels.
* **Actions Requises (To-Do List) :** Liste des tâches urgentes pour l'admin (ex: validation de diplômes, relance de paiements échoués).
* **Graphiques de Performance :** Courbe d'évolution des inscriptions et camembert de répartition des revenus.
* **Alertes Critiques :** Affichage des cas médicaux urgents nécessitant intervention.
* **Classement :** Top des cardiologues les plus actifs.

### 2. 👥 Gestion des Patients
**Fonctionnalités :**
* **Liste & Filtres :** Recherche avancée, filtrage par statut (Actif/Suspendu/Impayé) et par type d'abonnement.
* **Actions Rapides :** Voir, Éditer, Supprimer, Suspendre.
* **Export :** Téléchargement des données en CSV ou PDF.
* **Statistiques Patients :** Répartition par abonnement et taux d'observance global.

### 3. 👤 Détail Patient (Vue Admin)
**Fonctionnalités :**
* **Infos Générales :** Identité, contact, médecin référent.
* **Gestion Abonnement :** Statut du paiement, historique, modification de la formule ou remboursement.
* **Aperçu Médical (Read-only) :** Dernière mesure de tension et statistiques (sans modification possible).
* **Actions Administratives :** Réinitialisation de mot de passe, changement de médecin, suspension de compte.

### 4. 👨‍⚕️ Gestion des Cardiologues
**Fonctionnalités :**
* **Liste & Filtres :** Tri par statut de validation, revenus ou nombre de patients.
* **Workflow de Validation :** Interface de vérification des diplômes et documents officiels.
* **Enrôlement :** Génération et téléchargement du QR Code praticien et de l'affiche cabinet.
* **Performance individuelle :** Revenus générés, note moyenne et nombre de patients actifs.

### 5. 🏥 Gestion des Hôpitaux
**Fonctionnalités :**
* **Liste Partenaires :** Suivi des hôpitaux, cliniques et leurs responsables.
* **Top Revenus :** Classement des établissements générant le plus de chiffre d'affaires.
* **Gestion B2B :** Suivi des contrats et des statuts de négociation.

### 6. 📢 Communication & Marketing (Nouveau)
**Fonctionnalités :**
* **Création de Campagne :** Outil d'envoi de messages (Push, Email, SMS).
* **Ciblage :** Sélection de l'audience (Tous, Patients uniquement, Premium uniquement, par région).
* **Historique :** Liste des campagnes passées avec taux d'ouverture.

### 7. 💰 Revenus & Finances
**Fonctionnalités :**
* **Vue Globale :** Chiffre d'affaires total, part plateforme vs part médecins.
* **Flux de Transactions :** Liste en temps réel des paiements entrants (réussis et échoués).
* **Gestion des Reversements (Payouts) :** Calcul des commissions dues aux médecins et statut des virements.
* **Répartition :** Analyse des revenus par type d'abonnement (Standard/Premium).

### 8. ⚖️ Réconciliation Financière (Nouveau)
**Fonctionnalités :**
* **Comparateur de Flux :** Analyse des écarts entre la Base de Données (App) et la Banque (Mobile Money).
* **Gestion des Écarts :** Liste des transactions suspectes ou non synchronisées.
* **Outils de Correction :** Validation manuelle ou régularisation des transactions.

### 9. 📹 Monitoring Téléconsultations (Nouveau)
**Fonctionnalités :**
* **Qualité de Service (QoS) :** Tableau de bord de la santé des appels vidéo (WebRTC).
* **Logs d'Appels :** Liste des appels avec détails techniques (perte de paquets, échecs de connexion).
* **Diagnostic :** Distinction entre problèmes réseaux (connexion patient) et bugs serveurs.

### 10. 📊 Analytics & Statistiques
**Fonctionnalités :**
* **Indicateurs de Croissance :** Graphiques d'acquisition et de rétention utilisateurs.
* **Santé Publique :** Statistiques anonymisées sur l'état de santé des patients (taux d'HTA).
* **Géographie :** Carte de répartition des utilisateurs.
* **Usage Technique :** Répartition par type d'appareil (Android/iOS).

### 11. 🔐 Sécurité & Audit
**Fonctionnalités :**
* **Logs Système :** Journal complet des actions (connexions, modifications).
* **Modale "Bris de Glace" :** Fenêtre obligeant l'admin à justifier l'accès à un dossier médical sensible.
* **Alertes de Sécurité :** Notification d'intrusions, IPs bloquées, trafic suspect.
* **Gestion des Accès :** Création de comptes administrateurs et attribution des rôles.

### 12. 🎧 Support & Tickets
**Fonctionnalités :**
* **Gestion des Tickets :** Liste des demandes d'assistance triées par priorité et statut.
* **Performance Support :** Temps moyen de réponse et satisfaction utilisateur.
* **Affectation :** Distribution des tickets aux agents disponibles.

### 13. ⚙️ Paramètres Système
**Fonctionnalités :**
* **Configuration Générale :** Nom de l'app, emails de contact, fuseau horaire.
* **Tarification :** Modification du prix des abonnements et des pourcentages de commission.
* **Clés API :** Gestion des connexions aux passerelles de paiement (MTN, Moov, Stripe).
* **Sécurité Avancée :** Configuration de la 2FA, durée de session, politiques de mot de passe.