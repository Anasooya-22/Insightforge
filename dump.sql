--
-- PostgreSQL database dump
--

\restrict LvdjkL1CZwr2vcNAU8hg17cYt457xpbRbsXdXBX0uuxvb0g10NfDbboeKsNvlg7

-- Dumped from database version 18.2
-- Dumped by pg_dump version 18.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    study_id uuid,
    question_text text NOT NULL,
    question_type text DEFAULT 'text'::text
);


ALTER TABLE public.questions OWNER TO postgres;

--
-- Name: responses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.responses (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    question_id uuid,
    user_id character varying,
    answer text NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.responses OWNER TO postgres;

--
-- Name: studies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.studies (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL,
    description text,
    created_by character varying,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.studies OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id character varying DEFAULT gen_random_uuid() NOT NULL,
    password text NOT NULL,
    username text NOT NULL,
    role text DEFAULT 'respondent'::text,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questions (id, study_id, question_text, question_type) FROM stdin;
9c9a04ed-329f-4e26-9a37-00d9dbe8c483	8f47c4b3-8050-401f-b292-ff4b3fa0b932	How satisfied are you with our product?	rating
\.


--
-- Data for Name: responses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.responses (id, question_id, user_id, answer, created_at) FROM stdin;
7cd6002e-61a5-4274-ac92-2a16e0ae9f4d	9c9a04ed-329f-4e26-9a37-00d9dbe8c483	38d234af-5bf3-4b50-804f-af5f71b9f54f	Very satisfied	2026-03-23 10:07:56.217784
\.


--
-- Data for Name: studies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.studies (id, title, description, created_by, created_at) FROM stdin;
8f47c4b3-8050-401f-b292-ff4b3fa0b932	Test Study	Demo Study	38d234af-5bf3-4b50-804f-af5f71b9f54f	2026-03-19 15:23:48.343412
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, password, username, role, created_at) FROM stdin;
38d234af-5bf3-4b50-804f-af5f71b9f54f	admin123	admin	respondent	2026-03-19 15:19:12.85246
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);


--
-- Name: responses responses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT responses_pkey PRIMARY KEY (id);


--
-- Name: studies studies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.studies
    ADD CONSTRAINT studies_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_unique UNIQUE (username);


--
-- Name: questions questions_study_id_studies_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_study_id_studies_id_fk FOREIGN KEY (study_id) REFERENCES public.studies(id) ON DELETE CASCADE;


--
-- Name: responses responses_question_id_questions_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT responses_question_id_questions_id_fk FOREIGN KEY (question_id) REFERENCES public.questions(id) ON DELETE CASCADE;


--
-- Name: responses responses_user_id_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responses
    ADD CONSTRAINT responses_user_id_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: studies studies_created_by_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.studies
    ADD CONSTRAINT studies_created_by_users_id_fk FOREIGN KEY (created_by) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

\unrestrict LvdjkL1CZwr2vcNAU8hg17cYt457xpbRbsXdXBX0uuxvb0g10NfDbboeKsNvlg7

