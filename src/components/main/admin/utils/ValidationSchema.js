import * as yup from 'yup';

const formSchema = yup.object().shape({
  title: yup.string().required('Required'),
  course: yup.string().required('Required'),
  tags: yup.string().required('Required'),
  description: yup.string().required('Required'),
  progress: yup.string().required('Required'),
});
export default formSchema;
