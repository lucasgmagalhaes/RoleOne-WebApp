import { Injectable } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "angularfire2/storage";
import { Observable } from "rxjs";

/**
 * @class StorageService
 * @see angularFire2 - AngularFireStorage
 * @link https://github.com/angular/angularfire2/blob/master/docs/storage/storage.md
 * @constructor AngularFire2 version: v5.0.0-rc.11
 * @description Encapsulation of AngularFireStorage of angularFire2 for manage upload/download of files
 * from firebase.
 *
 ***Obs: This methods do not alter the primary methods of angularfire authentication.**
 *
 * Monitoring upload percentage:
 *
 * An AngularFireUploadTask has methods for observing upload percentage as well as the final download URL.
 *
 ***snapshotChanges()**: *Observable<FirebaseStorage.UploadTaskSnapshot>* -> Emits the raw UploadTaskSnapshot as the file upload progresses.
 ***percentageChanges()**: *Observable<number>* -> Emits the upload completion percentage.
 ***getDownloadURL()**: *Observable<any>* -> Emits the download url when available
 *
 */
@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(private storage: AngularFireStorage) {}

  /**
   * @description  Download a file creating a reference and call the `getDownloadURL()` method on an AngularFireStorageReference.
   * @param path
   */
  downloadFile(path: string): Observable<string | null> {
    const ref = this.storage.ref(path);
    return ref.getDownloadURL();
  }
  /**
   * @description Starts the upload of the blob to the storage reference's path.
   * Returns an AngularFireUploadTask for upload monitoring.
   * @returns Interface that monitors the progress of the file upload
   */
  uploadWithPut(event, path: string): AngularFireUploadTask {
    const file = event.target.files[0];
    const ref = this.storage.ref(path);
    return ref.put(file);
  }

  /**
   * @description Updates an existing item in the array. Accepts a key, database
   * reference, or an unwrapped snapshot.
   * @returns Interface that monitors the progress of the file upload
   */
  uploadWithPutString(event, path: string): AngularFireUploadTask {
    const file = event.target.files[0];
    const filePath = path;
    const ref = this.storage.ref(filePath);
    return ref.putString(file);
  }

  /**
   * @description Upload or update a new file to the storage reference's path.
   * Returns an AngularFireUploadTask for upload monitoring.
   * @returns Interface that monitors the progress of the file upload
   */
  upload(event, path: string): AngularFireUploadTask {
    const file = event.target.files[0];
    const filePath = path;
    return this.storage.upload(filePath, file);
  }
}
