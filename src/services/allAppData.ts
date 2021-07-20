import axios from "axios";
import { getAllAppDataRawResponse } from "../typeInterfaces";
import { dataNormaliser } from "./dataNormaliser";

export const getAllAppData = (documentId?: string) => {
  
  return axios
  .post<getAllAppDataRawResponse>("https://graphql.sketch.cloud/api", {
    query: `
    {
      share(id: "${documentId}") {
        identifier
        version {
          document {
            name
            artboards {
              entries {
                name
                isArtboard
                files {
                  url
                  height
                  width
                  scale
                  thumbnails {
                    url
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }`
  })
  .then((response) => {
    if(response.data.data) {
      return dataNormaliser(response.data);
    }

    else {
      throw new Error(`No data found for documentId: ${documentId}`)
    }
  })
}
