function slugify(text: string) {
    return text
      .toLowerCase()
      .normalize("NFD") // quita acentos
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  }

  export default slugify;