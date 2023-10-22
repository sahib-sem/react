import { useForm } from 'react-hook-form';
import { ValidationError } from '../ValidationError';
import { NewSongData } from '../type';
import { useDispatch } from 'react-redux';
import { CloseCreateModal, StartPostSongData } from '../../store/songsSlice';

export function NewSongForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<NewSongData>();
  const dispatch = useDispatch();

  async function handleSave(newSongData: NewSongData) {
    dispatch(StartPostSongData(newSongData));
  }
  return (
    <form noValidate onSubmit={handleSubmit(handleSave)}>
      <div>
        <button
          onClick={() => {
            dispatch(CloseCreateModal());
          }}
        >
          X
        </button>
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register('title', {
            required: 'please provide a title',
          })}
        />
        <ValidationError fieldError={errors.title} />
      </div>
      <div>
        <label htmlFor="singer">Singer</label>
        <textarea
          id="singer"
          {...register('singer', {
            required: "please provide the singer's name",
          })}
        />
        <ValidationError fieldError={errors.singer} />
      </div>
      <div>
        <label htmlFor="genre">Genre</label>
        <textarea
          id="genre"
          {...register('genre', {
            required: 'please provide the genre',
          })}
        />
        <ValidationError fieldError={errors.genre} />
      </div>
      <div>
        <label htmlFor="youtube_link">Youtube link</label>
        <textarea
          id="youtube_link"
          {...register('youtube_link', {
            required: 'please provide the youtube_link',
            pattern: {
              value: /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/,
              message: 'Entered url is not a youtube url',
            },
          })}
        />
        <ValidationError fieldError={errors.youtube_link} />
      </div>

      <div>
        <button type="submit" disabled={isSubmitting}>
          Save
        </button>
        {isSubmitSuccessful && <div role="alert">The post was successfully saved</div>}
      </div>
    </form>
  );
}
