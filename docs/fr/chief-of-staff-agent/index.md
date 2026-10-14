---
description: Créez et validez un agent Chef de cabinet simple pour l’expérience immersive destinée aux dirigeants des services bancaires aux entreprises.
outline: deep
---

<!-- markdownlint-disable MD013 -->

# 🧭 Agent Chef de cabinet

**Guide de préparation de la formation.** Préparez une démonstration simple avec Agent Builder dans Microsoft 365 Copilot pour l’expérience immersive destinée à la direction. L’objectif est de présenter un agent fondé sur un rôle, et non une solution de production.

## Ce que vous créerez {#what-youll-build}

L’agent aidera un membre de la direction à :

- Préparer des réunions et des rencontres de direction
- Résumer les éléments prioritaires et faire ressortir les risques
- Repérer les décisions en suspens, les responsables et les dépendances
- Rédiger des prochaines étapes concises à partir du contenu approuvé de l’organisation

::: info À noter
Privilégiez la création d’un seul agent, partagé avec l’équipe de formation. Si le partage n’est pas disponible, chaque personne peut le recréer à partir de ce guide. Pour un déploiement formel sous forme de package, utilisez Microsoft 365 Agents Toolkit ou Copilot Studio plutôt qu’Agent Builder.
:::

## Créez l’agent {#create-the-agent}

Les libellés de l’interface peuvent varier selon sa langue. Les noms anglais **Create agent** et **Agent Builder** sont indiqués ci-dessous pour faciliter le repérage dans une interface anglaise.

1. Ouvrez [Microsoft 365 Copilot Chat](https://m365copilot.com/).
1. Sélectionnez l’option de création d’un agent (**Create agent** dans l’interface anglaise).
1. Utilisez **Agent Builder**.
1. Donnez-lui le nom suivant :

    ```text
    Chef de cabinet
    ```

1. Utilisez la description suivante :

    ```text
    Aide les membres de la direction à préparer leurs réunions, à résumer
    les éléments prioritaires, à repérer les décisions en suspens, à faire
    ressortir les risques et à rédiger des prochaines étapes concises
    à partir du contenu approuvé de l’organisation.
    ```

1. Utilisez les instructions suivantes :

    ```text
    Vous êtes Chef de cabinet pour un membre de la haute direction.

    Aidez l’utilisateur à se préparer, à établir ses priorités et à
    communiquer clairement. Soyez concis, stratégique et orienté vers
    l’action. Concentrez-vous sur les répercussions d’affaires, les décisions
    à prendre, les risques, les responsables, les dépendances et les
    prochaines étapes. Répondez en français canadien, sauf si l’utilisateur
    demande une autre langue.

    Lorsque vous résumez de l’information :
    - Commencez par le point essentiel pour la direction.
    - Utilisez les sections Décisions, Risques, Questions en suspens,
      Responsables et Prochaines étapes lorsque cela est utile.
    - Distinguez les faits des interprétations.
    - Faites référence aux sources lorsqu’elles sont disponibles.
    - Indiquez lorsque l’information est manquante ou incertaine.

    Lorsque vous aidez à préparer une réunion :
    - Préparez une courte note de breffage.
    - Soulignez ce que la personne à la direction doit savoir.
    - Repérez les décisions à prendre et les questions probables.
    - Proposez des mesures de suivi.

    Lorsque vous rédigez une communication :
    - Adoptez un ton adapté à la direction.
    - Soyez clair, concis et professionnel.
    - Formulez explicitement la demande ou la décision.

    Sécurité et gouvernance :
    - Utilisez uniquement l’information que l’utilisateur est autorisé
      à consulter.
    - N’inventez pas de faits, de mesures, d’engagements ou de décisions.
    - Ne prenez pas de décisions réglementées en matière de finances,
      de droit, d’emploi ou de conformité, ni de décisions ayant des
      répercussions sur la clientèle.
    - Rappelez à l’utilisateur de valider les faits, les calculs et les
      recommandations importants.
    ```

1. Ajoutez des sources de connaissances approuvées, si elles sont disponibles. Utilisez uniquement des fichiers fictifs ou des exemples approuvés.
1. Ajoutez les amorces de conversation de la section suivante.
1. Testez l’agent.
1. Enregistrez ou publiez l’agent.
1. Partagez-le avec l’équipe de formation, si cela est permis.
1. Prenez des captures d’écran du nom, de la description, des instructions, des sources de connaissances et de l’état du partage.

## Ajoutez des amorces de conversation {#conversation-starters}

Ajoutez les trois amorces suivantes :

```text
Que pouvez-vous m’aider à faire?
```

```text
Aidez-moi à préparer ma prochaine rencontre de direction. Résumez les
principaux enjeux, les risques, les décisions à prendre et les prochaines
étapes recommandées.
```

```text
Transformez cette information en une note de breffage concise pour
la direction, en précisant les décisions à prendre, les responsables
et les mesures de suivi.
```

## Présentez la démonstration {#trainer-demo}

Présentez l’agent ainsi :

```text
Les agents sont des expériences Copilot spécialisées. Ils sont utiles
lorsqu’une tâche se répète, répond à un rôle ou à un objectif précis
et bénéficie d’instructions ou de sources de connaissances cohérentes.
```

Exécutez ensuite les requêtes (prompts) suivantes :

```text
Que pouvez-vous m’aider à faire?
```

```text
Aidez-moi à préparer une rencontre de direction. À partir du contexte
disponible, résumez les principaux enjeux, les risques, les décisions
à prendre, les responsables et les prochaines étapes.
```

Concluez la démonstration ainsi :

```text
Cette démonstration est volontairement simple. Le but n’est pas de créer
un agent de production, mais de montrer comment un agent nommé, fondé
sur un rôle, peut orienter Copilot vers un scénario de travail récurrent
de la direction.
```

## Respectez les limites de la démonstration {#guardrails}

::: warning Avertissement
Présentez uniquement les fonctionnalités dont la disponibilité a été confirmée par le client. Appuyez l’agent sur des sources auxquelles l’utilisateur a déjà accès.
:::

- Utilisez uniquement les modèles GPT disponibles dans l’environnement; ne présentez pas les modèles Claude ou Anthropic et ne laissez pas entendre qu’ils sont disponibles.
- Ne présentez pas Copilot Notebooks ni Copilot Pages.
- Ne présentez pas Facilitator dans Teams.
- Ne vous appuyez pas sur la transcription des réunions Teams.
- Ne présentez pas Copilot Skills dans Excel ou PowerPoint.
- Ne promettez pas la disponibilité des agents SharePoint avant qu’elle soit confirmée.
- Utilisez du contenu fictif ou approuvé et respectez les autorisations existantes de l’utilisateur.

## Validez l’agent {#validation-checklist}

Avant la formation, vérifiez les points suivants :

- [ ] Le nom de l’agent est exactement **Chef de cabinet**.
- [ ] La description s’adresse à la direction.
- [ ] Les instructions mettent l’accent sur les décisions, les risques, les responsables et les prochaines étapes.
- [ ] L’agent ne prétend pas prendre des décisions réglementées ou ayant des répercussions sur la clientèle.
- [ ] L’agent répond à `Que pouvez-vous m’aider à faire?`.
- [ ] L’équipe de formation dispose des accès nécessaires avant la séance.
- [ ] Les captures d’écran de la configuration font partie des ressources préparées pour la formation.

## Préparation terminée {#setup-complete}

Vous disposez maintenant d’un agent ciblé, fondé sur un rôle, qui soutient un scénario de travail récurrent de la direction tout en gardant la démonstration simple et encadrée.

<!-- markdownlint-enable MD013 -->
