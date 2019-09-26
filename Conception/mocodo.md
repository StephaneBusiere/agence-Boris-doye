COLLABORATOR: avatar, firstname, lastname, login, password, role, created_at, updated_at
write, 1N POST, 0N COLLABORATOR
POST: title, post_description, author, created_at, updated_at
 
EQUIPMENT: equipment_name, equipment_picture, equipment_description, created_at, updated_at

PICTURE: picture_name, picture_source, picture_description, created_at, updated_at

VIDEO: video_name, video_source, video_description, created_at, updated_at
made for, 1N CLIENT, 11 VIDEO
CLIENT: logo_source, created_at, updated_at

PROFESSIONAL DATA : professional_name, professional_mail, professional_phone, created_at, updated_at