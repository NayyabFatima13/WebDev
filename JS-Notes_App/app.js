const noteTextInput = document.getElementById('noteText');
    const saveNoteBtn = document.getElementById('saveNoteBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const searchInput = document.getElementById('searchInput');
    const notesGrid = document.getElementById('notesGrid');

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    let editingId = null; // Tracks the note currently being edited

    renderNotes();

    // Event Listener: Real-time Search Filtering
    searchInput.addEventListener('input', renderNotes);

    // Event Listener: Save (Add or Update)
    saveNoteBtn.addEventListener('click', () => {
      const text = noteTextInput.value.trim();
      if (!text) return;

      if (editingId !== null) {
        // Update existing note
        notes = notes.map(note => 
          note.id === editingId ? { ...note, content: text } : note
        );
      } else {
        // Add new note
        notes.push({
          id: Date.now(),
          content: text
        });
      }

      resetForm();
      saveAndRender();
    });

    // Event Listener: Cancel Editing
    cancelEditBtn.addEventListener('click', resetForm);

    // Prepare form for editing a note
    function startEdit(note) {
      editingId = note.id;
      noteTextInput.value = note.content;
      saveNoteBtn.textContent = 'Update Note';
      cancelEditBtn.style.display = 'inline-block';
      noteTextInput.focus();
    }

    // Reset form back to default "Add Note" state
    function resetForm() {
      editingId = null;
      noteTextInput.value = '';
      saveNoteBtn.textContent = 'Add Note';
      cancelEditBtn.style.display = 'none';
    }

    // Delete a note
    function deleteNote(id) {
      if (editingId === id) resetForm(); // Clear form if currently editing deleted note
      notes = notes.filter(note => note.id !== id);
      saveAndRender();
    }

    // Persist to localStorage and update UI
    function saveAndRender() {
      localStorage.getItem('notes');
      localStorage.setItem('notes', JSON.stringify(notes));
      renderNotes();
    }

    // Render notes based on active search filter
    function renderNotes() {
      notesGrid.innerHTML = '';

      const query = searchInput.value.toLowerCase().trim();
      const filteredNotes = notes.filter(note => 
        note.content.toLowerCase().includes(query)
      );

      if (filteredNotes.length === 0) {
        notesGrid.innerHTML = `<p class="empty-message">${
          notes.length === 0 ? 'No notes added yet.' : 'No matching notes found.'
        }</p>`;
        return;
      }

      filteredNotes.forEach(note => {
        const card = document.createElement('div');
        card.className = 'note-card';

        const content = document.createElement('p');
        content.textContent = note.content;

        const actions = document.createElement('div');
        actions.className = 'actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => startEdit(note);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteNote(note.id);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        card.appendChild(content);
        card.appendChild(actions);
        notesGrid.appendChild(card);
      });
    }