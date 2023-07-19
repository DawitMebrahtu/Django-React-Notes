from django.urls import path
from .views import getRoutes, getNotes, getNote, updateNote, deleteNote, createNote

urlpatterns = [
	path('', getRoutes, name ='routes'),
	path('notes/', getNotes, name='notes'),
	path('notes/create', createNote, name='create-note'),
	path('notes/<int:note_id>/update', updateNote, name='update-note'),
	path('notes/<int:note_id>/delete', deleteNote, name='delete-note'),
	path('notes/<int:note_id>', getNote, name='note'),

]