// import applyFilters from '_helpers/functions/filters'
import {build_many, build_groups} from './helpers';
// console.log(applyFilters)

export const projects_sections = (...params)=>{
  // console.log(...params)
  return build_many('projects_sections', {sections: 'section_id'}, ['project_id', 'section_id'], ...params)
}
export const units_sections = (...params)=>{
  return build_many('units_sections', {sections: 'section_id'}, ['unit_id', 'section_id'], ...params)
}
export const feeds_sections = (...params)=>{
  return build_many('feeds_sections', {sections: 'section_id'}, ['feed_id', 'section_id'], ...params)
}
export const profile_sections = (...params)=>{
  return build_many('profile_sections', {sections: 'section_id'}, ['section_type', 'section_id'], ...params)
}
export const news_sections = (...params)=>{
  return build_many('news_sections', {sections: 'section_id'}, ['news_id', 'section_id'], ...params)
}
export const events_sections = (...params)=>{
  return build_many('events_sections', {sections: 'section_id'}, ['event_id', 'section_id'], ...params)
}
export const offers_sections = (...params)=>{
  return build_many('offers_sections', {sections: 'section_id'}, ['offer_id', 'section_id'], ...params)
}
export const feeds_images = (...params)=>{
  return build_many('feeds_images', {images: 'image_id'}, ['feed_id', 'image_id'], ...params)
}
export const projects_images = (...params)=>{
  return build_many('projects_images', {images: 'image_id'}, ['project_id', 'image_id'], ...params)
}
export const units_images = (...params)=>{
  return build_many('units_images', {images: 'image_id'}, ['unit_id', 'image_id'], ...params)
}
export const news_images = (...params)=>{
  return build_many('news_images', {images: 'image_id'}, ['news_id', 'image_id'], ...params)
}
export const events_images = (...params)=>{
  return build_many('events_images', {images: 'image_id'}, ['event_id', 'image_id'], ...params)
}
export const offers_images = (...params)=>{
  return build_many('offers_images', {images: 'image_id'}, ['offer_id', 'image_id'], ...params)
}
export const units = (...params)=>{
  return build_groups('units', {
    building: {'building_id': 'building_id', 'id': 'id'},
    project: {
      pro: {
        key: 'chain',
        display: 'project_id',
        selectors: {
          buildings: 'building_id',
        },
      },
      id: 'id',
    },
  }, ...params)
}
export const section_bullets = (...params)=>{
  return build_groups('section_bullets', {
    section: {'section_id': 'section_id', 'id': 'id'},
  }, ...params)
}
export const units_offers = (...params)=>{
  return [
    ...build_many('units_offers', {units: 'unit_id'}, ['offer_id', 'unit_id'], ...params),
    ...build_many('units_offers', {offers: 'offer_id'}, ['unit_id', 'offer_id'], ...params, {name: 'units'}),
  ]
}
export const units_installments = (...params)=>{
  return build_many('units_installments', {installment_plans: 'installment_id'}, ['unit_id', 'installment_id'], ...params)
}
export const units_favorites = (s, data, ...params)=>{
  data = data.map((d)=>({...d, active: d.active === undefined ? true:d.active}))
  return build_groups('units_favorites', {
    user: {'user_id': 'user_id', 'unit_id': 'unit_id'},
    unit: {'unit_id': 'unit_id', 'user_id': 'user_id'},
    fav: {
      levels: {
        'user_id': 'user_id', 'unit_id': 'unit_id',
      },
      map: {
        key: 'chain',
        selectors: {
          units: 'unit_id',
        },
      },
    },
  }, s, data, ...params)
}

export const reservations = (s, data, ...params)=>{
  return build_groups('reservations', {
    res: {
      'user_id': 'user_id', 'unit_id': 'unit_id',
    },
  }, s, data, ...params)
}
export const user_units = (s, data, ...params)=>{
  return build_groups('user_units', {
    user: {
      'user_id': 'user_id', 'unit_id': 'unit_id',
    },
  }, s, data, ...params)
}
export const unit_attachment = (s, data, ...params)=>{
  return build_groups('unit_attachment', {
    unit: {
      'unit': 'unit', 'name': 'name', 'attachment': 'attachment',
    },
  }, s, data, ...params)
}
export const unit_payment = (s, data, ...params)=>{
  return build_groups('unit_payment', {
    ref: {
      'ref': 'ref', 'id': 'id',
    },
  }, s, data, ...params)
}
export const unit_plan = (s, data, ...params)=>{
  return build_groups('unit_plan', {
    unit: {
      'unit': 'unit', 'id': 'id',
    },
  }, s, data, ...params)
}
export const unit_partner = (s, data, ...params)=>{
  return build_groups('unit_partner', {
    unit: {
      'unit': 'unit', 'partner': 'partner',
    },
  }, s, data, ...params)
}
export const replays = (s, data, ...params)=>{
  return build_groups('replays', {
    request: {
      'request': 'request', 'id': 'id',
    },
  }, s, data, ...params)
}
export const request_details = (s, data, ...params)=>{
  return build_groups('request_details', {
    request: {
      'request': 'request', 'id': 'id',
    },
  }, s, data, ...params)
}

export const teams = (...params)=>{
  return build_groups('order', {'lead_order': 'lead_order'}, ...params)
}

