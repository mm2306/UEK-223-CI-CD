import api from "../config/Api";
import { List } from "../types/models/List.model";
import { ListDTO } from "../types/models/List.model";
import { Importance } from "../types/models/List.model";
import UserService from "./UserService";

const ListService = {
  getList: async (listID: string): Promise<List> => {
    const response = await api.get(`/list/${listID}`) as ListDTO;
    const data: List = {
      id: response.id,
      title: response.title,
      text: response.text,
      importance: Importance[response.importance as keyof typeof Importance],
      createdAt: new Date(response.createdAt),
      user: response.user,
    };
    return data;
  },

  updateList: (list: List) => {
    return api.put(`/list/${list.id}`, list);
  },

  addList: (list: List) => {
    return api.post("/list", list).then((res) => {
      return res.data;
    });
  },

  getAllLists: async () => {
    const response = await api.get(`/list`) as ListDTO[];
    const data: List[] = response.map((listElement) => {
      return {
        id: listElement.id,
        title: listElement.title,
        text: listElement.text,
        importance:
          Importance[listElement.importance as keyof typeof Importance],
        createdAt: new Date(listElement.createdAt),
        user: listElement.user,
      } as List;
    });
    return data;
  },

  deleteList: (id: string) => {
    return api.delete(`/list/${id}`);
  },
};

export default ListService;
