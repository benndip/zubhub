import { Box, FormControl, TextField, makeStyles } from '@material-ui/core';
import React, { memo, useEffect, useMemo, useState } from 'react';
import styles from '../../../assets/js/styles';
import { Editor, TagsInput } from '../../../components';
import { searchTags } from '../script';
import TextInput from '../../../components/form/textInput/TextInput';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import configureStore from '../../../store/configureStore';

function Step1({ formik, handleBlur }) {
  const commonClasses = makeStyles(styles)();
  const [value, setValue] = useState('');
  const [remoteTags, setRemoteTags] = useState([]);
  const [popularTags, setPopularTags] = useState([
    'Glue',
    'Water',
    'Paint',
    'Brush',
    'Battery',
    'Scissors',
    'Cardboard',
    'Measuring tape',
    // 'General',
  ]);

  const clearSuggestions = () => setRemoteTags([]);

  const i18n = useSelector(state => state.language.i18n);

  const handleTagChange = async value => {
    setValue(value);
    searchTags(value, (error, data) => {
      if (!error) setRemoteTags(data);
    });
  };

  const addTag = value => {
    const values = [...(formik.values?.materials_used || []), value];
    formik.setFieldValue('materials_used', values);
    clearSuggestions();
    setValue('');
  };

  const removeTag = tagIndex => {
    const tags = [...formik.values.materials_used].filter((_, index) => index !== tagIndex);
    formik.setFieldValue('materials_used', tags);
  };

  useEffect(() => {
    console.log('changed');
  }, [value, remoteTags, popularTags]);



  return (
    <div>
      <Box marginTop={6}>
        <FormControl fullWidth>
          <TextInput
            label={i18n.t('createProject.inputs.title.label')}
            required={true}
            variant="outlined"
            name="title"
            placeholder={i18n.t('createProject.inputs.description.placeholder')}
            defaultValue={formik.values.title}
            onChange={_.debounce(formik.handleChange, 500)}
            className={commonClasses.inputText}
            onBlur={formik.handleBlur}
            error={formik.touched.title ? formik.errors.title : ''}
            helperText={formik.touched.title && formik.errors.title}
          />
        </FormControl>
      </Box>

      <Box marginTop={6} marginBottom={5}>
        <FormControl fullWidth>
          <Editor
            label={i18n.t('createProject.inputs.description.label')}
            required={true}
            value={formik.values.description}
            onChange={formik.handleChange}
            enableToolbar={true}
            variant="outlined"
            name="description"
            multiline
            error={formik.touched.description ? formik.errors.description : ''}
            minRows={3}
            onBlur={formik.handleBlur}
            placeholder={i18n.t('createProject.inputs.description.helperText')}
          />
        </FormControl>
      </Box>

      <Box marginTop={6} marginBottom={1}>
        <TagsInput
          required
          name="materials_used"
          label={i18n.t('createProject.inputs.materialsUsed.label')}
          description={i18n.t('createProject.inputs.materialsUsed.include')}
          selectedTags={formik.values.materials_used}
          error={formik.touched.materials_used && formik.errors.materials_used}
          popularTags={popularTags}
          onChange={handleTagChange}
          addTag={addTag}
          value={value}
          remoteData={remoteTags}
          clearSuggestions={clearSuggestions}
          removeTag={removeTag}
          handleBlur={formik.handleBlur}
          placeholder={i18n.t('createProject.inputs.materialsUsed.startTyping')}
        />
      </Box>
    </div>
  );
}

export default memo(Step1);
