-- poblar tablas

-- -- crear usuarios base

INSERT INTO public.blog_user
(user_uuid, nickname, email, password_md5_hash, signature)
VALUES('08139f8c-0a07-4064-bb2c-0ee3a9655736', 'pepe', 'pepe@mail.com', 'bf414173786628b193822d4e9d36fa55', 'holis');

INSERT INTO public.blog_user
(user_uuid, nickname, email, password_md5_hash, signature)
VALUES('d0583d9f-2ab3-4761-81af-c971e772b03a', 'pablo', 'pablo@mail.com', '179318d03e32274cd7e7fac14671065d', '(╯°□°)╯︵ ┻━┻');

INSERT INTO public.blog_user
(user_uuid, nickname, email, password_md5_hash, signature)
VALUES('b8b0d370-b74c-4364-a9fe-99f7d305b147', 'camila', 'camila@mail.com', '92378f92600b99b415935a345537f842', 'The only reason for time is so that everything does not happen at once');

-- -- crear etiquetas base

INSERT INTO public.tag
("key", description)
VALUES('REVIEW', 'Reseñas de temas varios');

INSERT INTO public.tag
("key", description)
VALUES('CAMPING', 'Aventuras en el campamento');

INSERT INTO public.tag
("key", description)
VALUES('GAMES', 'Juego de la semana');

INSERT INTO public.tag
("key", description)
VALUES('BOOKS', 'Libro del mes');

-- -- crear publicaciones base

INSERT INTO public.post
(post_uuid, author_id, title, summary, "content", published, updated_at, published_at)
VALUES(
'25c0a9ab-013b-4093-b1b0-1e2d72fb9d9b',    
(SELECT user_uuid FROM public.blog_user where nickname = 'pepe'),
'Lorem Ipsum', 
'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac risus non nisl volutpat bibendum vitae nec turpis. Nullam eu fringilla lorem. Aenean ornare nisi non lectus gravida, vel accumsan diam dignissim. Phasellus non dui malesuada, elementum ex a, mattis dui. Vivamus in felis sit amet enim hendrerit dignissim tincidunt in mi. Fusce et nibh magna. In eget tellus ut nisl posuere eleifend. Maecenas a urna vitae justo bibendum scelerisque molestie at mauris. Sed mollis, mauris eget accumsan facilisis, elit enim consequat arcu, eu sollicitudin nibh tellus non lacus. Mauris sit amet metus a turpis lobortis bibendum. Duis pretium fermentum ante et consequat. Quisque eu velit vel orci pulvinar maximus.

Donec quis pretium urna. Suspendisse porta neque sit amet ornare commodo. Praesent egestas feugiat quam, vitae luctus risus rhoncus vitae. Proin et viverra lectus. Praesent non efficitur nisl, nec venenatis sem. Nullam odio metus, tincidunt eget accumsan euismod, vehicula eu purus. Nam neque dolor, commodo vel posuere at, commodo vitae libero. Donec dui sem, pellentesque ac egestas quis, feugiat quis eros. Aliquam blandit dui velit, id ultricies dolor auctor ultricies. Integer vel luctus justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non aliquam quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sed neque hendrerit nulla tincidunt mattis nec id augue. ',
TRUE,
CURRENT_TIMESTAMP, 
CURRENT_DATE
);

INSERT INTO public.post
(post_uuid, author_id, title, summary, "content")
VALUES(
'0947c786-55eb-4774-8f5e-aaf0eeae7a35',
(SELECT user_uuid FROM public.blog_user where nickname = 'pepe'),
'Modo fácil', 
'O cómo hacer más accesibles los juegos a todos',
'Pedir un modo fácil para los videojuegos es una cuestión que se vuelve viral más o menos cada 8 meses... 
Phasellus maximus pellentesque elit et lobortis. Mauris et justo vel lectus congue hendrerit. Quisque hendrerit eleifend neque, sed volutpat urna suscipit ac. Aenean lacinia ligula et mauris commodo pharetra. Fusce sit amet malesuada turpis, at ornare lacus. Suspendisse id convallis sapien. Nulla eget mollis velit. Phasellus sit amet scelerisque neque, ac ornare elit. Curabitur aliquam efficitur nisl nec finibus. Vestibulum rhoncus odio eu lacinia cursus. Ut ac maximus lorem. Ut et egestas eros. Donec ligula nunc, consequat vitae ligula nec, malesuada semper nisi. '
);

INSERT INTO public.post
(post_uuid, author_id, title, summary, "content")
VALUES(
'822cb9e9-8fc3-4143-9f6f-86c7a60a0633',
(SELECT user_uuid FROM public.blog_user where nickname = 'camila'),
'Postulados de Euclides', 
'Si una línea recta corta a otras dos, de tal manera que la suma de los dos ángulos interiores ...',
'Los postulados de Euclides hacen referencia al tratado denominado Los Elementos, escrito por Euclides hacia el año 300 a. C., exponiendo los conocimientos geométricos de la Grecia clásica deduciéndolos a partir de cinco postulados, considerados los más evidentes y sencillos.1​

Los postulados de Los Elementos son:

    Dos puntos distintos cuales quiera determinan un segmento de recta.
    Un segmento de recta se puede extender indefinidamente en una línea recta.
    Se puede trazar una circunferencia dados un centro y un radio cualquiera.
    Todos los ángulos rectos son iguales entre sí.
    Postulado de las paralelas. Si una línea recta corta a otras dos, de tal manera que la suma de los dos ángulos interiores del mismo lado sea menor que dos rectos, las otras dos rectas se cortan, al prolongarlas, por el lado en el que están los ángulos menores que dos rectos.

Este último postulado tiene un equivalente, que es el más usado en los libros de geometría:

    Por un punto exterior a una recta, se puede trazar una única paralela.

A principios del siglo XIX Gauss, Lobachevsky y János Bolyai consideraron la posibilidad de una geometría sin el quinto postulado, descubriendo la Geometría hiperbólica.

En términos actuales, estos postulados fueron enunciados por Hilbert en sus axiomas. '
);

-- -- crear comentarios de las publicaciones

INSERT INTO public.post_comment
(comment_uuid, post_uuid, "content", published, published_at)
VALUES(
'3ec919a3-e14a-44d9-b20e-4a3f4bca060c',
(SELECT post_uuid FROM public.post where title = 'Lorem Ipsum'),
'Vaya, qué interesante composición literaria',
TRUE,
CURRENT_TIMESTAMP
);

INSERT INTO public.post_comment
(comment_uuid, post_uuid, "content")
VALUES(
'ab3eb187-8e20-4691-b1f6-09bbdbb8dbd8',
(SELECT post_uuid FROM public.post where title = 'Lorem Ipsum'),
'Puede ser bastante controversial, pero entiendo tu punto'
);

INSERT INTO public.post_comment
(comment_uuid, post_uuid, "content")
VALUES(
'0ea8d85e-b484-4651-8995-c1f82ebc09fd',
(SELECT post_uuid FROM public.post where title = 'Lorem Ipsum'),
'Donec eu suscipit elit. Curabitur ut elit eu ligula hendrerit malesuada eget eget risus. Vestibulum ut efficitur nibh. Sed malesuada accumsan libero at aliquet. Donec in velit sit amet nunc pretium egestas.'
);

INSERT INTO public.post_comment
(comment_uuid, post_uuid, "content")
VALUES(
'7c8ee88f-ea6c-417e-b257-d42a1a540db0',
(SELECT post_uuid FROM public.post where title = 'Lorem Ipsum'),
'Vivamus consequat mattis auctor. Phasellus eu accumsan est, finibus malesuada elit. Etiam quis sollicitudin magna, eget tristique orci. '
);

-- -- etiquetar las publicaciones

INSERT INTO public.post_x_tag
(post_uuid, tag_id)
VALUES(
(SELECT post_uuid FROM public.post where title = 'Lorem Ipsum'), 
(SELECT id FROM public.tag where key = 'REVIEW')
);

INSERT INTO public.post_x_tag
(post_uuid, tag_id)
VALUES(
(SELECT post_uuid FROM public.post where title = 'Lorem Ipsum'), 
(SELECT id FROM public.tag where key = 'BOOKS')
);

INSERT INTO public.post_x_tag
(post_uuid, tag_id)
VALUES(
(SELECT post_uuid FROM public.post where title = 'Modo fácil'), 
(SELECT id FROM public.tag where key = 'GAMES')
);

INSERT INTO public.post_x_tag
(post_uuid, tag_id)
VALUES(
(SELECT post_uuid FROM public.post where title = 'Modo fácil'), 
(SELECT id FROM public.tag where key = 'REVIEW')
);