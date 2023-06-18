using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Application.Contratos;
using ProEventos.Domain;
using ProEventos.Persistence.Contratos;

namespace ProEventos.Application
{
    public class EventoService : IEventoService
    {
        private readonly IGeralPersistence _geralPersistence;
        private readonly IEventosPersistence _eventoPersistence;

        public EventoService(IGeralPersistence geralPersistence, IEventosPersistence eventosPersistence)
        {
            _geralPersistence = geralPersistence;
            _eventoPersistence = eventosPersistence;
        }

        public async Task<Evento> AddEvento(Evento model)
        {
            try
            {
                _geralPersistence.Add<Evento>(model);
                if(await _geralPersistence.SaveChangesAsync())
                    return await _eventoPersistence.GetEventoByIdAsync(model.Id, false);

                return null;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        
        public async Task<Evento> UpdateEvento(int eventoId, Evento model)
        {
           try
           {
                var evento = await _eventoPersistence.GetEventoByIdAsync(eventoId, false);
                if(evento == null) return null;

                _geralPersistence.Update(model);
                if(await _geralPersistence.SaveChangesAsync())
                    return await _eventoPersistence.GetEventoByIdAsync(model.Id, false);

                return null;
           }
           catch(Exception ex)
           {
              throw new Exception(ex.Message);
           }
        }

        public async Task<bool> DeleteEvento(int eventoId)
        {
            try
           {
                var evento = await _eventoPersistence.GetEventoByIdAsync(eventoId, false);
                if(evento == null) throw new Exception("Evento para delete não foi encontrado!!");

                _geralPersistence.Delete<Evento>(evento);
                return  await _geralPersistence.SaveChangesAsync();
           }
           catch(Exception ex)
           {
              throw new Exception(ex.Message);
           }
        }

        public async Task<Evento[]> GetAllEventosAsync(bool includePalestrantes = false)
        {
            try
            {
                var eventos = await _eventoPersistence.GetAllEventosAsync(includePalestrantes);
                if(eventos == null)
                    return null;

                return eventos;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false)
        {
            try
            {
                var eventos = await _eventoPersistence.GetAllEventosByTemaAsync(tema, includePalestrantes);
                if(eventos == null)
                    return null;

                return eventos;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Evento> GetEventoByIdAsync(int id, bool includePalestrantes = false)
        {
            try
            {
                var evento = await _eventoPersistence.GetEventoByIdAsync(id, includePalestrantes);
                if(evento == null)
                    return null;

                return evento;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

    }
}