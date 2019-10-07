|Collaborators|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|identifiant du collaborateur|
|firstname|VARCHAR(64)|NOT NULL|prénom du collaborateur|
|lastname|VARCHAR(64)|NOT NULL|nom de famille du collaborateur|
|log in|VARCHAR(64)|NOT NULL|nom de compte|
|password|VARCHAR(128)|NOT NULL|mot de passe du compte|
|role|VARCHAR(128)|NOT NULL|role au sein de l'agence|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|date de création|
|updated_at|TIMESTAMP|NULL|date de la dernière mise à jour|

Post|Type|Spécificités|Description|
|-|-|-|-|
|title|VARCHAR(128)|NOT NULL|titre de l'article|
|post description|TEXT|NOT NULL|texte de l'article|
|author|VARCHAR(128)|NOT NULL|prénom et nom de famille de l'auteur|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|date de création|
|updated_at|TIMESTAMP|NULL|date de la dernière mise à jour|

Equipement|Type|Spécificités|Description|
|-|-|-|-|
|name|VARCHAR(128)|NOT NULL|nom de l'objet|
|item description|TEXT|NOT NULL|caractéristiques de l'objet|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|date de création|
|updated_at|TIMESTAMP|NULL|date de la dernière mise à jour|

Picture|Type|Spécificités|Description|
|-|-|-|-|
|name|VARCHAR(128)|NOT NULL|titre de l'image|
|picture description|TEXT|NOT NULL|légende de l'image|
|source|VARCHAR(128)|NOT NULL|source de l'image|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|date de création|
|updated_at|TIMESTAMP|NULL|date de la dernière mise à jour|

Video|Type|Spécificités|Description|
|-|-|-|-|
|name|VARCHAR(128)|NOT NULL|titre de la vidéo|
|video description|TEXT|NOT NULL|légende de la vidéo|
|source|VARCHAR(128)|NOT NULL|source de la vidéo|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|date de création|
|updated_at|TIMESTAMP|NULL|date de la dernière mise à jour|

Video|Type|Spécificités|Description|
|-|-|-|-|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|date de création|
|updated_at|TIMESTAMP|NULL|date de la dernière mise à jour|

Professional data|Type|Spécificités|Description|
|-|-|-|-|
|firstname|VARCHAR(64)|NOT NULL|prénom du chrgé de com|
|lastname|VARCHAR(64)|NOT NULL|nom de famille du chargé de com|
|phone|INT|NOT NULL|numéro de contact|
|mail|VARCHAR(128)|NOT NULL|mail de contact|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|date de création|
|updated_at|TIMESTAMP|NULL|date de la dernière mise à jour|