import api from "../config/Api";
import {Importance, List, ListDTO} from "../types/models/List.model";

const ListService = {
  getList: async (listID: string): Promise<List> => {
    const response = await api.get(`/list-entries/${listID}`);
    return {
      id: response.data.id,
      title: response.data.title,
      text: response.data.text,
      importance: Importance[response.data.importance as keyof typeof Importance],
      createdAt: new Date(response.data.createdAt),
      user: response.data.user,
    };
  },

  updateList: (list: List) => {
    return api.put(`/list-entries/${list.id}`, list);
  },

  addList: async (list: List) => {
    const res = await api.post("/list-entries", {
      title: list.title,
      text: list.text,
      importance: list.importance,
      user: list.user
    });
    return res.data;
  },

  getAllLists: async (page = 0) => {
    const response = await api.get(`/list-entries/user?page=${page}`);
    const data: List[] = (response.data as ListDTO[]).map((listElement) => {
      return {
        id: listElement.id,
        title: listElement.title,
        text: listElement.text,
        importance:
          Importance[listElement.importance as keyof typeof Importance],
        user: listElement.user,
        createdAt: new Date(listElement.createdAt),
      } as List;
    });
    return data;
  },

  getAllListsAdmin: async (page = 0) => {
    const response = await api.get(`/list-entries?page=${page}`);
    const data: List[] = (response.data as ListDTO[]).map((listElement) => {
      return {
        id: listElement.id,
        title: listElement.title,
        text: listElement.text,
        importance:
          Importance[listElement.importance as keyof typeof Importance],
        user: listElement.user,
        createdAt: new Date(listElement.createdAt),
      } as List;
    });
    return data;
  },

  getAllListsAdminPagesCount: async () => {
    const response = await api.get(`/list-entries/page`);
    return response.data;
  },

  getAllListsPagesCount: async () => {
    const response = await api.get(`/list-entries/user/page`);
    return response.data;
  },

  deleteList: async (id: string) => {
    return await api.delete(`/list-entries/${id}`);
  },
};

export default ListService;
